package controller

import (
	"encoding/json"
	"log"

	"github.com/yukiHaga/web_server/src/internal/app/model"
	"github.com/yukiHaga/web_server/src/internal/app/service"
	"github.com/yukiHaga/web_server/src/pkg/henagin/http"
)

type BearerSession struct{}

func NewBearerSession() *BearerSession {
	return &BearerSession{}
}

type BearerSessionPostRequestBody struct {
	Email    string
	Password string
}

type BearerSessionPostResponseBody struct {
	User  *model.BearerUser
	Token *model.BearerToken
}

type BearerSessionGetResponseBody struct {
	User *model.BearerUser
}

func (c *BearerSession) Action(request *http.Request) *http.Response {
	if request.Method == http.Get {
		// セッションを取得する
		token, err := request.CheckBearerAuthentication()
		if err != nil {
			log.Println(err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusBadRequestCode,
				http.StatusReasonBadRequest,
				request.TargetPath,
				[]byte{},
			)
		}

		user, err := model.FindBearerUserById(token.UserId)
		if err != nil {
			log.Println(err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusInternalServerErrorCode,
				http.StatusReasonInternalServerError,
				request.TargetPath,
				[]byte{},
			)
		}

		body, _ := json.Marshal(BearerSessionGetResponseBody{User: user})

		return http.NewResponse(
			http.VersionsFor11,
			http.StatusSuccessCode,
			http.StatusReasonOk,
			request.TargetPath,
			body,
		)
	} else if request.Method == http.Post {
		// ユーザーログインのエンドポイント(POST /sessions)
		body := &BearerSessionPostRequestBody{}
		if err := json.Unmarshal(request.Body, body); err != nil {
			// ボディのパースに失敗
			log.Printf("fail to body parse: %v", err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusBadRequestCode,
				http.StatusReasonBadRequest,
				request.TargetPath,
				[]byte{},
			)
		}

		user, err := model.FindBearerUserByEmail(body.Email)
		if err != nil {
			log.Printf("fail to find user by email: %v\n", err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusBadRequestCode,
				http.StatusReasonBadRequest,
				request.TargetPath,
				[]byte{},
			)
		}

		if err := service.NewCreateBearerSession(user, body.Password).Run(); err != nil {
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusInternalServerErrorCode,
				http.StatusReasonInternalServerError,
				request.TargetPath,
				[]byte{},
			)
		}

		token, err := user.GetBearerToken()
		if err != nil {
			log.Printf("fail to get token: %v", err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusInternalServerErrorCode,
				http.StatusReasonInternalServerError,
				request.TargetPath,
				[]byte{},
			)
		}

		bytebody, _ := json.Marshal(BearerSessionPostResponseBody{
			User:  user,
			Token: token,
		})

		return http.NewResponse(
			http.VersionsFor11,
			http.StatusSuccessCode,
			http.StatusReasonOk,
			request.TargetPath,
			bytebody,
		)
	} else if request.Method == http.DELETE {
		// ミドルウェアでauthorization bearer トークンを持たない場合を弾いた前提
		// ただめんどいからこんとろーら側で弾く
		// まずはセッションを取得する
		token, err := request.CheckBearerAuthentication()
		if err != nil {
			log.Println(err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusBadRequestCode,
				http.StatusReasonBadRequest,
				request.TargetPath,
				[]byte{},
			)
		}

		// ベアラートークンを削除してサーバーサイドのセッションを消す、
		if err = token.Destroy(); err != nil {
			log.Println(err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusInternalServerErrorCode,
				http.StatusReasonInternalServerError,
				request.TargetPath,
				[]byte{},
			)
		}

		return http.NewResponse(
			http.VersionsFor11,
			http.StatusSuccessCode,
			http.StatusReasonOk,
			request.TargetPath,
			[]byte{},
		)
	}

	return &http.Response{}
}
