module.exports = (sequelize, DataTypes) => {
   const title = sequelize.define('toy_title', {
        toy_id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        toy_title: {
          type: DataTypes.STRING,
          allowNull: true,
        }   
    },{
        timestamps:false,
    });

    return title;
}