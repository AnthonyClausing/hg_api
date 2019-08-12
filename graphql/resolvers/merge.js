const commentMapper = (comments) => {
  return comments.map(comment => {
    return {
      id: comment.id,
      text: comment.text,
      image: comment.image,
      imageId: comment.imageId,
      createdAt: comment.createdAt,
      parentId: comment.parentId,
      postId: comment.postId,
      user: comment.user
    }
  })
}

exports.commentMapper = commentMapper;