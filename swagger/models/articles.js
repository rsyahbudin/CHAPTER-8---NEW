"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Articles.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Articles",
      tableName: "article",
    }
  );
  return Articles;
};
