tyu
===

### clone this cli repo and run
```bash
# copy
$ git clone git@github.com:trabur/tyu-command-line.git --recursive
$ npm install

# change directory and install packages
$ cd ./object-relational-mapping/prisma
$ npm install

# ~/P/tyu-command-line> npm start users
```

### docs include orm library
```bash
# install library api
$ git submodule add git@github.com:trabur/object-relational-mapping.git

# lib api dependancies
$ npm i websocket
$ npm i crypto-js
$ npm i jsonwebtoken
```

### begin
```bash
$ npm i prisma -g
$ cd ./object-relational-mapping/prisma
$ npx prisma generate

$ cd ..
$ npm run dev
```