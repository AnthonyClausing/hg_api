const { Comment, User } = require('../../db/models')
const { commentMapper } = require('./merge')

module.exports = {
  addComment: async (commentData) => {
    let comment = await Comment.create({
      text: commentData.commentInput.text,
      image: commentData.commentInput.image,
      imageId: commentData.commentInput.imageId,
      postId: commentData.commentInput.postId,
      userId: commentData.commentInput.userId,
      parentId: commentData.commentInput.parentId
    })
    let postComments = await Comment.findAll({where: {postId: commentData.commentInput.postId}, include : User})
    return commentMapper(postComments) 
  }
}