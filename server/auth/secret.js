module.exports.secret = (user) =>{
    secretKey : user.loginId,
    option : {
        algorithm :"HS256",
        expireIn : "30",
        issuer : user.loginId,
    }
}
