const request = require("request");
const express = require('express');
const app = express();
const api = require('./translate/translate');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
// const session = require('express-session');

// default options
app.use(cors());
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// '/search'로 시작시 검색 관련 함수 실행 - node실행 시 해당 문에서 오류 발생
app.use('/search', api);

app.listen(port,()=>console.log(`Listening on port ${port}`));