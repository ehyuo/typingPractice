const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(40),
        primaryKey: true,
        comment: "id",
      },
      name: {
          type: Sequelize.STRING(40),
          comment: "name"
      },
      language: {
          type: Sequelize.STRING(40),
          comment: "language"
      },
      title: {
        type: Sequelize.STRING(40),
        comment: "title"
      },
      mode: {
          type: Sequelize.STRING(40),
          comment: "mode"
      },
      speed: {
          type: Sequelize.INTEGER(4),
          comment: "speed"
      },
      accuracy: {
          type: Sequelize.INTEGER(3),
          comment: "accuracy"
      },
      backspace: {
          type: Sequelize.INTEGER(4),
          comment: "backspace"
      }, 
    }, {
      sequelize,
      charset: "utf8",
      collate: "utf8_general_ci",
      underscored: false,
      modelName: "Record",
      tableName: "records",
      timestamps: true,
      paranoid: true,
    });
  }
};