
forkをやめないとリポジトリはpublicです




git clone 
cd strapi-nextjs-corporate-starter
cd frontend








----

<hr />


strapi-nextjs-corporate-starter

1. git clone 

```
git clone https://github.com/strapi/nextjs-corporate-starter.git
or
git clone strapi/nextjs-corporate-starter
```

2. yarn setup

```
$ cd clone したリポジトリ
yarn setup
```

ローカルとコンテナ内でディレクトリが分かれる構成（コンテナ内からWindowsのホストにファイルアクセス）だと、めっちゃ遅い（backendとfrontendそれぞれなので）

3. backendのビルドと開始

cd backend
yarn build
yarn develop


```
root@d8c4177bd900:/app/app/frontend_next/strapi-nextjs-corporate-starter/backend# node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
l53GBC/chANMvq2ufZKfRg==
```

openssl rand -base64 16
```
root@d8c4177bd900:/app/app/frontend_next/strapi-nextjs-corporate-starter/backend# openssl rand -base64 16
qSIn7s4/EXiMjNCvD8IhZg==
```

#### yarn develop でのエラー

- ファイル `.env` を使わずに `.env.local` のみ使おうとすると
Strapiが起動時に`.env`ファイルが存在しないと作られてしまい、JWT_SECRETのみだけ自動設定され、他のkeyとvalueは無しで、ダメな `.env` で起動しようとしてエラーになる


#### 
strapi admin に初回ユーザーでサインインする

### サンプルデータ投入

```
cd backend
yarn strapi import -f ../seed-data.tar.gz
```

```
root@d8c4177bd900:/app/app/frontend_next/strapi-nextjs-corporate-starter/backend# 
root@d8c4177bd900:/app/app/frontend_next/strapi-nextjs-corporate-starter/backend# yarn strapi import -f ../seed-data.tar.gz
yarn run v1.22.19
$ strapi import -f ../seed-data.tar.gz
? The import will delete your existing data! Are you sure you want to proceed? Yes
Starting import...
✔ entities: 67 transfered (size: 52.5 KB) (elapsed: 386 ms) 
✔ assets: 70 transfered (size: 23.3 MB) (elapsed: 6412 ms) 
⠙ links: 0 transfered (size: 0) (elapsed: 0 ms) 
warn: Skipping link layout.footer:2 -> api::category.category:5 due to a foreign key constraint.

warn: Skipping link layout.footer:2 -> api::category.category:4 due to a foreign key constraint.

warn: Skipping link layout.footer:2 -> api::category.category:6 due to a foreign key constraint.
✔ links: 67 transfered (size: 12.6 KB) (elapsed: 32 ms) 
✔ configuration: 66 transfered (size: 139.5 KB) (elapsed: 46 ms) 
┌───────────────────────────────────────────────────┬───────┬───────────────┐
│ Type                                              │ Count │ Size          │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ entities                                          │    67 │      52.5 KB  │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::article.article                           │     7 │ (    21.3 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::author.author                             │     2 │ (     333 B ) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::category.category                         │     3 │ (     604 B ) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::global.global                             │     1 │ (     1.4 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::lead-form-submission.lead-form-submission │     6 │ (     1.1 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::page.page                                 │     2 │ (     3.3 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- api::product-feature.product-feature           │     5 │ (       1 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::i18n.locale                            │     1 │ (     158 B ) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::upload.file                            │    21 │ (    19.6 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::users-permissions.permission           │    16 │ (       3 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::users-permissions.role                 │     3 │ (     677 B ) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ assets                                            │    70 │      23.3 MB  │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- .ico                                           │     1 │ (      15 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- .jpg                                           │    52 │ (      23 MB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- .png                                           │    13 │ (   243.6 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ -- .svg                                           │     4 │ (    17.7 KB) │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ links                                             │    67 │      12.6 KB  │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ configuration                                     │    66 │     139.5 KB  │
├───────────────────────────────────────────────────┼───────┼───────────────┤
│ Total                                             │   270 │      23.5 MB  │
└───────────────────────────────────────────────────┴───────┴───────────────┘
Import process has been completed successfully!
Done in 47.24s.
```

### starpi admin で
api tokenを生成する

admin画面で
Settings → API Tokens →「Create new API Token」を押して

Name：sugimoto
Token duration：Unlimited
Token type：Custom

を入力、選択し
| Content | Permissions |
| ---- | ---- |
|Article	  |find and findOne|
|Author	    |find and findOne|
|Category	  |find and findOne|
|Global	    |find|
|Page	      |find and findOne|
|Product-feature	|find and findOne|


Saveボタンを押して、生成されるので、以下をコピー（環境により変わる）

2104d3e9e81ce5dea35947d953a722b066c4cc5ed78f748b52155851517c576c2608af20fdaeccb54e149ba69ba3d86bffb880112735096e1ff958677f083f71da5cb37eccc989d277e661a56e961eace29dcc2f35747cfd02be7798aa6f5fb9a21a9c3121cb3f656f88976616e0937d66504d37e3f9a567e258b3b12a06d22a


`.env`ファイルの
NEXT_PUBLIC_STRAPI_API_TOKEN=
のvalue値としてセットする


２つ目の別のAPI tokenを生成する

Name：Public Read
Token duration：Unlimited
Token type：Read-only

２つ目の

b2ed8c3ad52d774077a60242640d7c8a9bb1ece7f29886009d5c4524bf60c2aa93b9b191b736da6d17ebeadafa68ed766b80be2f8eceeffc458368c6244f582e05d09bfaed8ab388554979d8b464d68008c6b9a4aff2c0255c6b71ba8b742015b2324ae68ffdcfd7dea570388081bcb0cbc65b50637c61da6bdbbed22895d782



３つ目の別のAPI tokenを生成する

Name：Public API Form Submit
Token duration：Unlimited
Token type： Custom

| Content | Permissions |
| ---- | ---- |
| Lead-Form-Submission| create| 

３つ目のapi key
761b7c8f70acde2e7e39779614c47b5d4104219a6a0e75ba2a03f33bd1bc8064dd58548b3f0897facf29ed52b779e5c64aa0f2f3497167e25faf0d7f2f9bafa19d5447dd486ba39ee8726b49ffe585c5391db58c40f165a9309a6f31cadb16683c68c62e88e8b598b9a883f3ea923dc5831c1196b49638161621dbfab9ee2b3c



### フロントエンドの開始

1. yarn install

windows 側に保持してしまうので遅い

```
root@3e77f2fa5333:/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend# yarn install
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 65.35s.
```


- compose.ymlでVolume定義して frontend/node_module のみ ボリューム定義した箇所を使う

アプリケーション側のfrontendのnode_modules
`/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules`
は
次のボリューム
`fnext-strapi-nextjs-corporate-starter-frontend_node_modules_volume`
を使う

- ボリューム定義後のyarn install で 25秒で少しはましになった
```
root@53a591de15a0:/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend# yarn install
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 25.02s.
```

2 yarn build

```

root@53a591de15a0:/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend# yarn build
yarn run v1.22.19
$ next build
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

   ▲ Next.js 14.1.3

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
   Collecting page data  ...TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11576:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async globalThis.fetch (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/.next/server/chunks/638.js:1:36484)
    at async l (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/.next/server/chunks/624.js:1:11319)
    at async Object.c [as generateStaticParams] (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/.next/server/app/[lang]/blog/[category]/[slug]/page.js:1:35860)
    at async buildParams (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1025:40)
    at async /app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1042:33
    at async /app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1172:114
    at async Span.traceAsyncFn (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/trace/trace.js:151:20) {
  cause: Error: connect ECONNREFUSED 127.0.0.1:1337
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1495:16)
      at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
    errno: -111,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 1337
  }
}
Error: Please check if your server is running and you set all the required tokens.
    at l (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/.next/server/chunks/624.js:1:11390)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.c [as generateStaticParams] (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/.next/server/app/[lang]/blog/[category]/[slug]/page.js:1:35860)
    at async buildParams (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1025:40)
    at async /app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1042:33
    at async /app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1172:114
    at async Span.traceAsyncFn (/app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/trace/trace.js:151:20)

> Build error occurred
Error: Failed to collect page data for /[lang]/blog/[category]/[slug]
    at /app/app/frontend_next/strapi-nextjs-corporate-starter/frontend/node_modules/next/dist/build/utils.js:1258:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

- cmsバックエンドのAPIがないとダメそう
- frontendの `.env`ファイルがない


cd front
yarn dev


http://localhost:3000/en


## localhost、コンテナ、host.docker.internalについて

- backend `yarn develop`で起動
- frontend `yarn dev` で起動

### 同一のコンテナ内だと、ビルドと実行の場合で異なる
- ビルドだと、SSGとしてはコンテナ内アクセスになる
- 実行だと、ブラウザからアクセスすることになる
- なので、ブラウザからアクセスするときは、host.docker.internal ではアクセスできない、http://localhost:3000 でアクセスする

- フロントエンドのSSGビルド（`yarn build`）ではコンテナ内のfrontendからアクセスするときに、localhostではアクセスできない。コンテナ内でなくいったんホスト側を経由してhost.docker.internalならアクセスできる。

ローカル開発の場合に、frontendとbackendを同一コンテナ内で動かすのは難しい
（コンテナ使わずに、ホストのみなら可能、ただしホストだとnodeや他いろいろ面倒、バージョン違いがありえる）

docker composeでフロントエンドとバックエンドを分ければサービス名でアクセスはできるのでは？
