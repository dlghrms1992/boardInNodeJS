const crypto = require('crypto');

module.exports = (password) => {
    let cryptoString = {

        encryptPassword : function(password) {
            new Promise(async (resolve, reject) => {
                const salt = await createSalt();
                crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
                    if(err) reject(err);
                    var encryptPassword = resolve({password: key.toString('base64'), salt});
                    return encryptPassword;
                })
            });
        },
        decodePassword : function(password){
            const salt = await createSalt();
            crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
                if(err) reject(err);
                var encryptPassword = resolve(key.toString('base64'));
                return decodePassword;
            })
        }
        
    }

    const createSalt = () => {
        new Promise((resolve, reject) => {
            crypto.randomBytes(64, (err, buf) => {
                if(err) reject(err);
                resolve(buf.toString('base64'));
            });
        });
    }

    return cryptoString;
}
