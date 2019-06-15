const Sequelize = require("sequelize");
module.exports = function({sequelize}) {
  return sequelize.define('user', {
    chatfuel_user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: false
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    profile_pic_url: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    }
  });
}
