module.exports = (sequlize, DataTypes) => {
    return sequlize.define('toy_title', {
        toy_id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        toy_title: {
          type: DataTypes.STRING,
          allowNull: true,
        }
    })
}