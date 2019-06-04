const { User, Post, Comment } = require('../models');

async function seed() {
  await User.destroy({ 
    where: {}
  });
  await Post.destroy({
    where: {}
  });
  await Comment.destroy({
    where: {}
  });

  // 1. Create Users
 const User_01 =  await User.create({
     user_name: 'Samuel Beckett',
     name: 'Shlammy'
 })

 // 2. Create Posts
 const Post_01 =  await Post.create({
    title: 'The irrevocable and jujune fall of contemporary politics',
    genre: 'Political, Satire',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'
 })

 // 3. Create Comments
 const Comment_01 =  await Comment.create({
    name: 'Blammy',
    content: 'Broooo, like... that was lit af dude. I totes agree with your opinion on this super relevant and timely political issue, dude.'
 })

 await Post_01.setUser(User_01);
 await Comment_01.setPost(Post_01);
 await Comment_01.setUser(User_01);

}

async function run() {
    try {
      await seed();
    } catch (e) {
      console.error(e);
    } finally {
      await process.exit()
    }
  }
  
  run();