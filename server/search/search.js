const request = require("request");
const express = require("express");
const router = express.Router();

// api 요청 변수
const client_id = "gLN7v2OL3WgxmWbijeZC";
const client_secret = "ZS5CD1q3kX";

router.get('/dict', function (req, res) {
    let result = null
    const api_url = 'https://openapi.naver.com/v1/search/encyc.json?query=' + encodeURI(req.query.query); // json 결과

    console.log(api_url);
        
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

            // res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            console.log(result[0]);
            res.send(result);
            
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });

    
});

module.exports = router;
