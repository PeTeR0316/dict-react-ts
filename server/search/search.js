const request = require("request");
const express = require("express");
const router = express.Router();
const  naver_api = require('../account');

// api 요청 변수
const client_id = naver_api.NAVER_API.CLIENT_ID;
const client_secret = naver_api.NAVER_API.CLIENT_SECRET;

router.get('/dict', function (req, res) {
    let result = null
    const api_url = 'https://openapi.naver.com/v1/search/encyc.json?query=' + encodeURI(req.query.query); // json 결과
        
    const options = {
        url: api_url,
        headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
        }
    };

    request.get(options, function (error, response, body) {
        if (!error) {
            result = JSON.parse(body).items;
            res.send(result);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });

    
});

module.exports = router;
