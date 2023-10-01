package model

import (
	"errors"
	"log"

	"github.com/yukiHaga/web_server/src/pkg/henagin/auth"
	"github.com/yukiHaga/web_server/src/pkg/henagin/db"
)

type BearerUserId int64

// PasswordとConfirmationはRailsの家蔵属性として入っていたから、一応入れておいた
type BearerUser struct {
	Id                   BearerUserId
	Name                 string
	Email                string
	PasswordDigest       string
	Password             string
	PasswordConfirmation string
}

func NewBearerUser(name, email, password, passwordConfirmation string) *BearerUser {
	return &BearerUser{
		Name:                 name,
		Email:                email,
		Password:             password,
		PasswordConfirmation: passwordConfirmation,
	}
}

// 既存のユーザーが存在するかの処理もかく
func (user *BearerUser) SignUp() error {
	if err := user.validate(); err != nil {
		return err
	}

	if err := user.save(); err != nil {
		return err
	}

	return nil
}

func (user *BearerUser) validate() error {
	// 空文字チェック
	if user.Name == "" {
		return errors.New("invalid name")
	}

	if user.Email == "" {
		return errors.New("invalid email")
	}

	if user.Password == "" {
		return errors.New("invalid password")
	}

	if user.PasswordConfirmation == "" {
		return errors.New("invalid password confirmation")
	}

	// パスワードが一致していないなら、エラーを出す
	if user.Password != user.PasswordConfirmation {
		return errors.New("fail to match password and password confirmation")

	}

	// Emailを満たすユーザーが既に存在するかをチェック(Emailのユニーク制約をアプリケーション側のバリデーションにも仕込む)
	if registeredUser, err := FindBearerUserByEmail(user.Email); err != nil {
		return errors.New("invalid email")
	} else {
		if registeredUser.Email != "" {
			return errors.New("invalid email")
		}
	}

	return nil
}

func (user *BearerUser) save() error {
	db, err := db.NewDB()
	if err != nil {
		return err
	}
	defer db.Close()

	stmtIns, err := db.Prepare("INSERT INTO bearer_users (name, email, password_digest) VALUES (?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmtIns.Close()

	passwordDigest, err := auth.EncryptPassword(user.Password)
	if err != nil {
		return err
	}

	result, err := stmtIns.Exec(user.Name, user.Email, passwordDigest)
	if err != nil {
		log.Println(err)
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}

	user.Id = BearerUserId(id)
	user.Password = ""
	user.PasswordConfirmation = ""

	return nil
}

func FindBearerUserByEmail(email string) (*BearerUser, error) {
	db, err := db.NewDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// idでselectしているので、一人のユーザーしかヒットしない
	rows, err := db.Query("SELECT * FROM bearer_users WHERE email = ?", email)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	user := BearerUser{}
	// 結果がないなら、ここのループに入らない
	// dbのスキーマをバックエンドアプリケーションのオブジェクトに引きずらせたくない。
	for rows.Next() {
		err := rows.Scan(&user.Id, &user.Name, &user.Email, &user.PasswordDigest)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}

func (user *BearerUser) GetBearerToken() (*BearerToken, error) {
	db, err := db.NewDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// idでselectしているので、一人のユーザーしかヒットしない
	rows, err := db.Query("SELECT * FROM bearer_tokens WHERE user_id = ?", user.Id)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	token := BearerToken{}
	// 結果がないなら、ここのループに入らない
	// dbのスキーマをバックエンドアプリケーションのオブジェクトに引きずらせたくない。
	for rows.Next() {
		err := rows.Scan(&token.Id, &token.Token, &token.UserId, &token.CreatedAt, &token.UpdatedAt)
		if err != nil {
			return nil, err
		}
	}

	return &token, nil
}

func (user *BearerUser) Login(password string) error {
	if err := auth.CompareHashAndPassword(user.PasswordDigest, password); err != nil {
		return err
	}

	return nil
}

func FindBearerUserById(userId BearerUserId) (*BearerUser, error) {
	db, err := db.NewDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// idでselectしているので、一人のユーザーしかヒットしない
	rows, err := db.Query("SELECT * FROM bearer_users WHERE id = ?", userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	user := BearerUser{}
	for rows.Next() {
		err := rows.Scan(&user.Id, &user.Name, &user.Email, &user.PasswordDigest)
		if err != nil {
			return nil, err
		}
	}

	if user.Id == 0 {
		return nil, errors.New("do not find user")
	}

	return &user, nil
}
