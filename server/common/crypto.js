const crypto = require('crypto');

module.exports.encryptPassword = (password) => 
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        console.log("salt === > ", salt);
        crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
            if(err) reject(err);
            resolve({password: key.toString('base64'), salt});
        })
    });


module.exports.decodePassword = (password, salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
            console.log(password);
            if(err) reject(err);
            resolve(key.toString('base64'));
        });
    })
    



const createSalt = () => 
    new Promise(async (resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if(err) reject(err);
            resolve(buf.toString('base64'));
        });
    });



