const db = require('./db');
const {User, Post, Comment} = require('./db/models');


const users = [{
    name: 'senseibean',
    email: 'senseibean@test.com', 
    password: 'tester'
  },{
    name: 'asugar',
    email: 'asugar@test.com', 
    password: 'tester'
  },{
    name: 'gamyrgrl',
    email: 'gamyrgrl@test.com', 
    password: 'tester'
  },{
    name: 'normie4lyfe',
    email: 'normie4lyfe@test.com', 
    password: 'tester'
  },{
    name: 'bofa',
    email: 'bofa@test.com', 
    password: 'tester'
  },{
    name: 'blueshell',
    email: 'blueshell@test.com', 
    password: 'tester'
  },{
    name: 'weebachu',
    email: 'weebachu@test.com', 
    password: 'tester'
  },{
    name: 'vidyaman',
    email: 'vidyman@test.com', 
    password: 'tester'
  },{
    name: 'imnewhere',
    email: 'imnewhere@test.com', 
    password: 'tester'
  },{
    name: 'agentsmith',
    email: 'agentsmith0@test.com', 
    password: 'tester'
}];

const posts = [{
    title: 'Area 51', 
    description: 'da boyz are back', 
    content: "http://res.cloudinary.com/afurosensei/image/upload/v1565394503/memedreams/qzbsbua8ztgeeaulx9fc.jpg",
    contentType: 'image',
    imageId: "memedreams/qzbsbua8ztgeeaulx9fc"
  },{
    title: 'test2 post', 
    description: 'this is test2', 
    content: 'what is test2?',
    contentType: 'text'
  },{
    title: 'My life Now',  
    content: "http://res.cloudinary.com/afurosensei/image/upload/v1565474766/memedreams/dnn2xruieslqaldiffwq.jpg",
    contentType: 'image',
    imageId: "memedreams/dnn2xruieslqaldiffwq"
  },{
    title: 'test4 post', 
    description: 'this is test4', 
    content: 'what is test4?',
    contentType: 'text'
  },{
    title: 'test5 post', 
    description: 'this is test5', 
    content: 'what is test5?',
    contentType: 'text'
  },
  {
    title: 'test6 post', 
    content: 'what is test6?',
    contentType: 'text'
  },
  {
    title: 'test7 post', 
    description: 'this is test7', 
    content: 'what is test7?',
    contentType: 'text'
  },
  {
    title: 'test8 post', 
    description: 'this is test8', 
    content: 'what is test8?',
    contentType: 'text'
  },
  {
    title: 'test9 post',  
    content: 'what is test9?',
    contentType: 'text'
  },
  {
    title: 'test10 post', 
    description: 'this is test10', 
    content: 'what is test10?',
    contentType: 'text'
  }];

const comments = [{
    text: 'this is wack',
    postId: 2
  },{
    text: 'haha ur funny',
    image: "http://res.cloudinary.com/afurosensei/image/upload/v1565460392/mememachine/xfpn0hp8r741h0wpsewy.jpg",
    imageId: "mememachine/xfpn0hp8r741h0wpsewy"
  },{
    text: 'this is the dumbest stuff ever'
  },{
    text: 'Marty, Im scared'
  },{
    text: 'i give up on humanity'
  },{
    text: 'this is crazy, man'
  },{
    text: 'YAAAAAAAS'
  },{
    text: 'thanks I hate it'
  },{
    text: 'democracy was a mistake',
    parentId: 1,
    postId: 2
  },{
    text: 'hmmmmmmmm',
    image: "http://res.cloudinary.com/afurosensei/image/upload/v1564375135/mememachine/le5rfkplbkva35t04dw8.png",
    imageId: "mememachine/le5rfkplbkva35t04dw8",
    parentId: 1,
    postId: 2
  }];

const seed = () => {
  return Promise.all(users.map(user => User.create(user)))
  .then((createdUsers) => Promise.all(posts.map(post =>{
    return Post.create({...post, userId: createdUsers[Math.floor(Math.random() * users.length)].id})
  })))
  .then(async (createdPosts) => {
    let commie = await Comment.create({
      text: 'better dead than red',
      postId: 2,
      userId: 3
    })
    return await Promise.all(comments.map((comment, i) => {
      let idxs = [0,8,9]
      let commentParams = {
        ...comment,  
        userId: Math.floor(Math.random() * 10) + 1
      }
        commentParams.postId =  commentParams.postId || createdPosts[Math.floor(Math.random() * posts.length)].id
      return Comment.create(commentParams)
    }))
  })
  .catch(err => {
    throw err 
  })
}

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();