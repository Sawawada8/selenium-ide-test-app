amall

### dev
```
make comp
make u
make r
make arti-key-g
npm i
npm watch // js, scss build
```
以上の流れで
- localhost:7777 => laravel_webapp
- localhost:1111 => phpMyAdmin
  - user : root(管理者),  laravel(一般)
  - pass : root

が利用できるはずです。
コマンドの詳細はMakefileをご確認下さい。

```
├─ app
├─ DBdata // localのDBデータが入ります。
├─ Makefile
├─ README.md
├─ artisan
├─ bootstrap
├─ composer.json
├─ composer.lock
├─ config
├─ database
├─ docker-compose.yml
├─ package-lock.json
├─ package.json
├─ phpunit.xml
├─ public_html
├─ resources
├─ routes
├─ server.php
├─ storage
├─ tests
├─ .editorconfig
├─ .env
├─ .env.example
├─ .gitattributes
├─ .gitignore
├─ .styleci.yml
└─ webpack.mix.js
```
