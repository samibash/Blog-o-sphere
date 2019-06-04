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
 const Shlammy =  await User.create({
     user_name: 'Samuel Beckett',
     name: 'Shlammy'
 });
 const Shane =  await User.create({
    user_name: 'NoobMaster69',
    name: 'Shane'
 });

 // 2. Create Posts
 const Post_01 =  await Post.create({
    title: 'The irrevocable and jujune fall of contemporary politics',
    genre: 'Political, Satire',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'
 });
 const Post_02 =  await Post.create({
    title: 'The unused philosophy of philosophizing',
    genre: 'Philosophy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'
 });
 const Post_03 =  await Post.create({
    title: `Thanos: just a guy who's trying to make the world a better place`,
    genre: 'Comedy...?',
    content: `Listen, I mean... it isn't all too bad, right? Guys? There's more resources to go around... for everyone... and less mouths to feed... I feel like you guys pulled back before you even started reading this.`
 });
 const Post_04 =  await Post.create({
    title: `Oh My G.O.D.D.: Granite, Opium, and Dungeons & Dragons, and why you're children need to stay away from them`,
    genre: 'Serious, Business',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'
 });

 // 3. Create Comments
 const Comment_01 =  await Comment.create({
    name: 'Blammy',
    content: 'Broooo, like... that was lit af dude. I totes agree with your opinion on this super relevant and timely political issue, dude.'
 });
 const Comment_02 =  await Comment.create({
    name: 'Brad',
    content: `Wow. I never even considered the possibility of even the slightest chance of even the morsel of food of even the most largest balloon you've ever even concieved of. THAT'S what i think about you piece, dude. Utter garbage. With a capital J. hahaha. First.`
 });
 const Comment_03 =  await Comment.create({
    name: 'I AM IRONMAN(online)',
    content: `no one will ever love you 3000`
 });

 await Post_01.setUser(Shlammy);
 await Comment_01.setPost(Post_01);
 await Comment_01.setUser(Shlammy);

 await Post_02.setUser(Shlammy);
 await Comment_02.setPost(Post_02);
 await Comment_02.setUser(Shlammy);

 await Post_03.setUser(Shane);
 await Comment_03.setPost(Post_03);
 await Comment_03.setUser(Shane);

 await Post_04.setUser(Shlammy);

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