const {Post, User} = require('../../db/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  users: async () => {
    const foundUsers = await User.findAll()
    return foundUsers.map(user =>{
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: null,
        createdPosts: Post.findAll({where:  {userId: user.id}}) 
      }
    })
  },
  signup: async (args) => {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  if (!args.email) {
    delete args.email
  }
  const user = await User.create({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, 'tonySecret')

  // 4
  return {
    token,
    user: {
      ...user.dataValues,
      password: '****'
    }
  }
  },
  login: async (args) => {
  // 1
  const user = await User.findOne({ where: { name: args.name} })
  if (!user) {
    throw new Error('No such user found')
  }
  // 2
  const hashedPassword = await bcrypt.hash(args.password, 10)
  const valid = await bcrypt.compare(args.password, hashedPassword)
  if (!valid) {
    throw new Error('Invalid password')
  }
  const token = jwt.sign({ userId: user.id }, 'tonySecret')

  // // 3
  return {
    token,
    user: {
      ...user.dataValues,
      password: '****'
    }
  }
  }
}