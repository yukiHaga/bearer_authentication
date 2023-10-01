package service

import "github.com/yukiHaga/web_server/src/internal/app/model"

type createBearerSession struct {
	User     *model.BearerUser
	Password string
}

func NewCreateBearerSession(user *model.BearerUser, password string) *createBearerSession {
	return &createBearerSession{
		User:     user,
		Password: password,
	}
}

func (service *createBearerSession) Run() error {
	if err := service.User.Login(service.Password); err != nil {
		return err
	}

	// 既存のベアラートークンを削除
	bearerToken, err := service.User.GetBearerToken()
	if err != nil {
		return err
	}

	if bearerToken != nil {
		if err := bearerToken.Destroy(); err != nil {
			return nil
		}
	}

	// 新しいBearerトークンを発行
	token := model.NewBearerToken(service.User.Id)
	if err := token.Save(); err != nil {
		return err
	}

	return nil
}
