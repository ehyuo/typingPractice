const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(40),
        primaryKey: true,
        comment: "id",
      },
      language: {
        type: Sequelize.STRING(10),
        comment: "language",
      },
      mode: {
          type: Sequelize.STRING(10),
          comment: "mode"
      },
      title: {
          type: Sequelize.STRING(40),
          comment: "title"
      },
      content: {
        type: Sequelize.STRING(10000),
        comment: "content"
      },
    }, {
      sequelize,
      charset: "utf8",
      collate: "utf8_general_ci",
      underscored: false,
      modelName: "Content",
      tableName: "contents",
      timestamps: true,
      paranoid: true,
    });
  }
};