const code = require('koa-router')();
const axios = require('axios');
const clientID = 'f4f827cfbebe51a858b8';
const clientSecret = '886840688d944d5afd0da2e7be5b5f1d0758b1b2';

// 查看热门 一个
code.get('/redirect', async ctx => {
  const requestToken = ctx.request.query.code;
  const tokenResponse = await axios({
    method: 'post',
    url:
      'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  });

  const accessToken = tokenResponse.data.access_token;

  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`,
    },
  });

  console.log(result.data);
  ctx.response.redirect(`http://localhost:8000/`);
});

module.exports = code.routes();
