const { hash } = require('../utils/hash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue('password', hash(password));
      },
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    // setterMethods: {
    //   password(value) {
    //     this.setDataValue('password', hash(password));
    //   },
    // },
  });

  User.associate = (models) => {
    User.belongsTo(models.Community, {
      as: 'CurrentCommunity',
      foreignKey: 'CommunityId',
    });

    User.belongsToMany(models.Community, {
      through: 'CommunityUser',
      as: 'Communities',
      foreignKey: 'CommunityId',
    });
  };

  return User;
};
