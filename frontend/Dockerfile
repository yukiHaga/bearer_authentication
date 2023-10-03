FROM node:latest

WORKDIR /frontend

COPY ./package*.json ./

RUN npm ci

COPY . .

# ポート番号を公開
# EXPOSE命令は、コンテナがどのポート番号を受け付けるようになるかを指定する。
EXPOSE 3000

CMD ["npm", "start"]