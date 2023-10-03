package model

import (
	"encoding/base64"
	"time"

	"github.com/google/uuid"
	"github.com/yukiHaga/web_server/src/pkg/henagin/db"
)

type BearerTokenId int64

// PasswordとConfirmationはRailsの家蔵属性として入っていたから、一応入れておいた
type BearerToken struct {
	Id        BearerTokenId `json:"id"`
	Token     string        `json:"token"`
	UserId    BearerUserId  `json:"-"`
	CreatedAt time.Time     `json:"created_at"`
	UpdatedAt time.Time     `json:"updated_at"`
}

func NewBearerToken(userId BearerUserId) *BearerToken {
	token := generateToken()

	return &BearerToken{
		Token:  token,
		UserId: userId,
	}
}

func generateToken() string {
	// ここのトークンの元の文字列をどうするかは議論の余地がありそう
	uuid := uuid.NewString()
	return base64.StdEncoding.EncodeToString([]byte(uuid))
}

func (token *BearerToken) Save() error {
	db, err := db.NewDB()
	if err != nil {
		return err
	}
	defer db.Close()

	stmtIns, err := db.Prepare("INSERT INTO bearer_tokens (token, user_id, created_at, updated_at) VALUES (?, ?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmtIns.Close()

	// ここの時間の処理は本来はDBでやった方が良い
	token.CreatedAt = time.Now()
	token.UpdatedAt = time.Now()

	result, err := stmtIns.Exec(token.Token, token.UserId, token.CreatedAt, token.UpdatedAt)
	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}

	token.Id = BearerTokenId(id)

	return nil
}

func FindBearerTokenByToken(token string) (*BearerToken, error) {
	db, err := db.NewDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM bearer_tokens WHERE token = ?", token)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	bearerToken := BearerToken{}
	// 結果がないなら、ここのループに入らない
	// dbのスキーマをバックエンドアプリケーションのオブジェクトに引きずらせたくない。
	for rows.Next() {
		err := rows.Scan(&bearerToken.Id, &bearerToken.Token, &bearerToken.UserId, &bearerToken.CreatedAt, &bearerToken.UpdatedAt)
		if err != nil {
			return nil, err
		}
	}

	return &bearerToken, nil
}

func (token *BearerToken) Destroy() error {
	db, err := db.NewDB()
	if err != nil {
		return err
	}
	defer db.Close()

	stmt, err := db.Prepare("DELETE FROM bearer_tokens WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(token.Id)
	if err != nil {
		return err
	}

	return nil
}
