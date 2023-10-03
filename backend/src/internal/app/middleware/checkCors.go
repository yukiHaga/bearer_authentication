package middleware

import (
	"github.com/yukiHaga/web_server/src/internal/app/controller"
	"github.com/yukiHaga/web_server/src/pkg/henagin/http"
)

type CheckCorsController struct {
	nextAction func(request *http.Request) *http.Response
}

func (c CheckCorsController) Action(request *http.Request) *http.Response {
	var response *http.Response
	var allowOrigin = "http://localhost:3000"

	// プリフライトリクエスト用
	// 以下のレスポンスを返す
	if request.Method == "OPTIONS" {
		response = http.NewResponse(
			http.VersionsFor11,
			http.StatusSuccessCode,
			http.StatusReasonOk,
			request.TargetPath,
			[]byte{},
		)

		response.SetHeader("Access-Control-Allow-Methods", "POST")
		response.SetHeader("Access-Control-Allow-Headers", "Content-Type")
		response.SetHeader("Access-Control-Allow-Origin", allowOrigin)
		return response
	}

	// プリフライト以外でリクエストが来た際のレスポンス時の処理
	response = c.nextAction(request)
	response.SetHeader("Access-Control-Allow-Origin", allowOrigin)

	return response
}

// ミドルウェア
// / ダミーコントローラとダミーアクションを作って、ダミーアクションの中で元々のコントローラのアクションを呼び出して、最終的にレスポンスを返せばOK
// goではメソッドを書き換えるのはできなかった
func CheckCors(c controller.Controller) controller.Controller {
	return CheckCorsController{nextAction: c.Action}
}
