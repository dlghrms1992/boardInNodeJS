module.exports = (sequlize, DataTypes) => {
    return sequlize.define('toy_user', {
        userid: {
            type : DataTypes.STRING(700),
            primaryKey : true,
            allowNull : false,
        },
        username: {
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        usernick: {
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        password:{
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        phone: {
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        email: {
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        type: {
            type : DataTypes.STRING(700),
            allowNull : false,
        },
        regdate: {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : sequlize.literal('now()'),
        }
    })
}