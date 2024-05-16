# AiChan

## 開発手順

### Node.js のインストール

ローカルマシンに直接インストールする

https://nodejs.org/ の左ボタン、LTS をダウンロードしてインストール

### リポジトリのクローンと npm モジュールのインストール

```sh
$ npm i
$ npx playwright install chromium
```

### 環境変数ファイルの作成

```sh
$ cp .env.example .env
```

### ミドルウェアのセットアップ

```sh
$ docker compose up -d
```

### 開発サーバー起動

次回以降は以下のコマンドだけで開発できる

```sh
$ npm run dev
```

#### MinIO Console

http://localhost:9001/
