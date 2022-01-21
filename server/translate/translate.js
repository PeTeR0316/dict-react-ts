const request = require("request");
const express = require("express");
const router = express.Router();

// api 요청 변수
const api_url = "https://openapi.naver.com/v1/papago/n2mt";
const client_id = "gLN7v2OL3WgxmWbijeZC";
const client_secret = "ZS5CD1q3kX";

router.get('/keyword/:text', (req, res) => {
    const translateText = req.params.text; //번역할 문장
    let result = null;

    console.log(translateText)
    // api 요청 옵션 (번역: 영어 -> 한글)
    const options = {
        url: api_url,
        form: { source: "en", target: "ko", text: translateText },
        headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
        },
    };

    // api 요청 보내고 콜백으로 결과 받기
    request.post(options, (error, response, body) => {
        if (!error) {
            result = JSON.parse(body).message.result;
            res.send(result);
        } else {
            console.log("error = " + response.statusCode);
        }
    });
});

module.exports = router;