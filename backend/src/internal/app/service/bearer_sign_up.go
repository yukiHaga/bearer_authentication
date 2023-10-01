package service

import (
	"github.com/yukiHaga/web_server/src/internal/app/model"
)

type BearerSignUp struct {
	User *model.BearerUser
}

func NewBearerSignUp(user *model.BearerUser) *BearerSignUp {
	return &BearerSignUp{
		User: user,
	}
}

func (service *BearerSignUp) Run() error {
	if err := service.User.SignUp(); err != nil {
		return err
	}

	token := model.NewBearerToken(service.User.Id)
	if err := token.Save(); err != nil {
		return err
	}

	return nil
}
