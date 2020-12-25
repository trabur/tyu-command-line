tyu
===

### start
```bash
# install library api
$ git submodule add git@github.com:trabur/object-relational-mapping.git

# lib api dependancies
$ npm i websocket
$ npm i crypto-js
$ npm i jsonwebtoken

# change directory and install packages
$ cd ./object-relational-mapping/prisma
$ npm install
```

### begin
```bash
$ npm i prisma -g
$ cd ./object-relational-mapping/prisma
$ npx prisma generate

$ cd ..
$ npm run dev
```