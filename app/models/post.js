module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };

  return Post;
};
