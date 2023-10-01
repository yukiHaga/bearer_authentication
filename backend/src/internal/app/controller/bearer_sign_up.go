package controller

import (
	"encoding/json"
	"log"

	"github.com/yukiHaga/web_server/src/internal/app/model"
	"github.com/yukiHaga/web_server/src/internal/app/service"
	"github.com/yukiHaga/web_server/src/pkg/henagin/http"
)

type BearerSignUp struct{}

func NewBearerSignUp() *BearerSignUp {
	return &BearerSignUp{}
}

type BearerSignUpRequestBody struct {
	Name                 string `json:"name"`
	Email                string `json:"email"`
	Password             string `json:"password"`
	PasswordConfirmation string `json:"password_confirmation"`
}

// トークンは配列でも良いかも
type BearerSignUpResponseBody struct {
	User  *model.BearerUser
	Token *model.BearerToken
}

func (c *BearerSignUp) Action(request *http.Request) *http.Response {
	// ユーザー登録のエンドポイント(POST /users)
	if request.Method == http.Post {
		body := &BearerSignUpRequestBody{}
		err := json.Unmarshal(request.Body, body)
		// ボディのパースに失敗
		if err != nil {
			log.Printf("fail to body parse: %v", err)
			return http.NewResponse(
				http.VersionsFor11,
				http.StatusBadRequestCode,
				http.StatusReasonBadRequest,
				request.TargetPath,
				[]byte{},
			)
		}

		user := model.NewBearerUser(body.Name, body.Email, body.Password, body.PasswordConfirmation)
		if err := service.NewBearerSignUp(user).Run(); err != nil {
			log.Printf("fail to body parse: %v", err)
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

		bytebody, _ := json.Marshal(BearerSignUpResponseBody{
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
	}

	// 何にも該当しなかった時
	return &http.Response{}
}
