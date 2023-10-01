package http

import (
	"encoding/base64"
	"errors"
	"fmt"
	"regexp"
	"strings"

	"github.com/yukiHaga/web_server/src/internal/app/model"
)

type Request struct {
	Method      string
	TargetPath  string
	HttpVersion string
	Headers     map[string]string
	Body        []byte
	Cookies     map[string]*Cookie
	Params      map[string]string
}

func NewRequest(method string, targetPath string, httpVersion string, headers map[string]string, body []byte) *Request {
	cookies := getCookiesByHeaders(headers)
	return &Request{
		Method:      method,
		TargetPath:  targetPath,
		HttpVersion: httpVersion,
		Headers:     headers,
		Body:        body,
		Cookies:     cookies,
		Params:      map[string]string{},
	}
}

func getCookiesByHeaders(headers map[string]string) map[string]*Cookie {
	// これregexじゃなくても、strings.splitの方がシンプルだったかも
	cookies := map[string]*Cookie{}
	if value, isThere := headers["Cookie"]; isThere {
		re := regexp.MustCompile("; ")
		cookiePairs := re.Split(value, -1)
		for _, cookiePair := range cookiePairs {
			re := regexp.MustCompile("=")
			splitCookiePair := re.Split(cookiePair, -1)
			name := splitCookiePair[0]
			value := splitCookiePair[1]
			cookies[name] = NewCookie(name, value)
		}
	}

	return cookies
}

func (request *Request) GetCookieByName(name string) (*Cookie, bool) {
	cookie, isThere := request.Cookies[name]
	return cookie, isThere
}

func (request *Request) CheckBasicAuthentication() bool {
	users := []*model.BasicUser{
		model.NewBasicUser("yuki", "hogefuga"),
	}

	if authorizationHeader, isThere := request.Headers["Authorization"]; isThere {
		encodedData := strings.SplitN(authorizationHeader, " ", 2)[1]
		for _, user := range users {
			data := fmt.Sprintf("%s:%s", user.Name, user.Password)

			if base64.StdEncoding.EncodeToString([]byte(data)) == encodedData {
				return true
			}
		}
	}

	return false
}

func (request *Request) CheckBearerAuthentication() (*model.BearerToken, error) {
	if authorizationHeader, isThere := request.Headers["Authorization"]; isThere {
		// Authorizationヘッダにセットしてあるトークンをゲット
		token := strings.SplitN(authorizationHeader, " ", 2)[1]
		// そのトークンと一致するトークンを見つける
		bearerToken, err := model.FindBearerTokenByToken(token)
		if err != nil {
			return nil, fmt.Errorf("fail to find token: %v", err)
		}

		return bearerToken, nil
	}

	return nil, errors.New("fail to find Authorization Header")
}
