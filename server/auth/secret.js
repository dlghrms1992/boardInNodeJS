module.exports = {
    secretKey : loginId,
    option : {
        algorithm :"HS256",
        expireIn : "30",
        issuer : loginId,
    }
}
