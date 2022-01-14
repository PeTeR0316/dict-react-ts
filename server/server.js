const express = require('express');
const app = express();
const api = require('./search/search.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// '/search'로 시작시 검색 관련 함수 실행
app.use('/search', api);

app.listen(port,()=>console.log(`Listening on port ${port}`));