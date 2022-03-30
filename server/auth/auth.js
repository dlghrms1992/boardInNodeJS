const jwt = require('jsonwebtoken');

module.exports =  {
    sign : async (user) => {

           const token = jwt.sign({
                type : "JWT",
                loginId : user.loginId,
                nickname : user.nickname},
                  secretKey,{
                    expiresIn: '30m',
            })
        
    },
    verify : async (token, user) => {
        const token = jwt.verify(token, user.loginId);
    }
}