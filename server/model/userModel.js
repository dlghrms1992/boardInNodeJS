module.exports = (sequlize, DataTypes) => {
 const User = sequlize.define('toy_users', {
        userid: {
            type : DataTypes.STRING(700),
            primaryKey : true,
            allowNull : false,
        },
        loginId : {
            type : DataTypes.STRING(700),
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
        password_salt:{
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
    });

    User.associate = function(models){

    };

    return User;
}