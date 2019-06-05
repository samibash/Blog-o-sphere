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
 const Albert =  await User.create({
   user_name: 'Mr. Smarty-pants',
   name: 'Albert'
 });
const Jaysus =  await User.create({
   user_name: 'The Son',
   name: 'Jaysus'
 });
const Mckrinkleberry =  await User.create({
   user_name: 'FootballIsLife2000',
   name: 'Mckrinkleberry'
 });
const Luke =  await User.create({
   user_name: 'Skywalker',
   name: 'Luke'
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
 const Post_05 =  await Post.create({
   title: `Mr. White is an awful chemist: Change my mind`,
   genre: 'Opinion',
   content: `Oh well, heil Hitler, bitch! And let me tell you something else. So what're you saying? Like, I shot someone with, like, a gun? We flipped a coin, okay? You and me. You and me! Coin flip is sacred! Your job is waiting for you in that basement, as per the coin! 
   I took this vo-tech class in high school, woodworking. I took a lot of vo-tech classes, because it was just big jerk-off, but this one time I had this teacher by the name of... Mr... Mr. Pike. I guess he was like a Marine or something before he got old. He was hard hearing. My project for his class was to make this wooden box. You know, like a small, just like a... like a box, you know, to put stuff in. So I wanted to get the thing done as fast as possible. 
   I figured I could cut classes for the rest of the semester and he couldn't flunk me as long as I, you know, made the thing. So I finished it in a couple days. And it looked pretty lame, but it worked. You know, for putting in or whatnot. So when I showed it to Mr. Pike for my grade, he looked at it and said: 'Is that the best you can do?' 
   At first I thought to myself 'Hell yeah, bitch. Now give me a D and shut up so I can go blaze one with my boys.' I don't know. Maybe it was the way he said it, but... it was like he wasn't exactly saying it sucked. He was just asking me honestly, 'Is that all you got?' And for some reason, I thought to myself: 'Yeah, man, I can do better.' `
 });
 const Post_06 =  await Post.create({
   title: `I am ASAC Shrader`,
   genre: 'Serious, Business',
   content: `I looked him up it was one of these physicists, one of Hitler's guys, physicist named Werner Heisenberg - real cute huh? Anyway, I figure with a handle like that my guy's gotta be some sort of a, some sort of an of egg head. No offense. And here we go, Gale 'Major Tom' Boetticher. Anyway, I just wanna see if I'm you know, not barking up the wrong tree chemically speaking. Uh, as far as I can make out, he's writing about a phenylacetone cook, right? That's pretty rare these days, but it does jive with the blue stuff I've been tracking. 
   That's a recipe for vegan s'mores. There's all kinds of crazy crap in there. He had like a top ten recumbent bicycles, indoor composting tips, all right next to the mother of methamphetamine syntheses. This guy was a uh, man he was a real character. Let me show you something. Right here, the top it says uh... 'to W.W. my star, my perfect silence.' W.W. who do you figure that is, you know? Woodrow Wilson, Willy Wonka... Walter White?    
   Sorry, buddy. No can do. Pain is my foot in your ass. Ooh, heyo... pool party! Hey, I don't get the gag, jackoff. Who is this? So... let me get this straight. You got this meth from 'some dude' wearing khaki pants, who - you're 80% sure - had a mustache. And that's it? That's your brain working at full capacity? It means I think your story's bullshit. 
   Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times. You need me to write it down for you? Well, I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me. Where are you going?`
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


 // 4. Associations
 await Post_01.setUser(Shlammy);
 await Comment_01.setPost(Post_01);
 await Comment_01.setUser(Shlammy);

 await Post_02.setUser(Shane);
 await Comment_02.setPost(Post_02);
 await Comment_02.setUser(Shane);

 await Post_03.setUser(Albert);
 await Comment_03.setPost(Post_03);
 await Comment_03.setUser(Albert);

 await Post_04.setUser(Jaysus);
 await Post_05.setUser(Mckrinkleberry);
 await Post_06.setUser(Luke);


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