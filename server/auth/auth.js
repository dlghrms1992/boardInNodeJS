const jwt = require('jsonwebtoken');

module.exports =  {
    sign : async (user) => {
        const payload =  {
            loginId : user.loginId,
            nickname : user.nickname,
        }
        const result = {
            token: jwt.sign(payload,  secretKey,)
        }
    }
}