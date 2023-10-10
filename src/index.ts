import { users, tweets, followers, likes, replies } from "./database/database";
import { User } from "./models/User";
import { Tweet } from "./models/Tweet";
import { Follower } from "./models/Follower";
import { Like } from "./models/Like";
import { Reply } from "./models/Reply";
import { TweetType } from './models/enums';


const userNames = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

function createUser(username: string, email: string, password: string): User {
  const id = users.length + 1;
  const name = userNames[id - 1];
  const user = new User(username, name, email, password);
  users.push(user);
  return user;
}

const user1 = createUser('user1', 'user1@email.com', 'password1');
const user2 = createUser('user2', 'user2@email.com', 'password2');
const user3 = createUser('user3', 'user3@email.com', 'password3');
const user4 = createUser('user4', 'user4@email.com', 'password4');
const user5 = createUser('user5', 'user5@email.com', 'password5');


const tweet1 = user1.createTweet("Tweet from user 1.");
const tweet2 = user2.createTweet("Tweet from user 2.");
const tweet3 = user3.createTweet("Tweet from user 3.");
const tweet4 = user4.createTweet("Tweet from user 4.");
const tweet5 = user5.createTweet("Tweet from user 5.");

tweets.push(tweet1, tweet2, tweet3, tweet4, tweet5);

user1.follow(user2);
user1.follow(user3);
user2.follow(user4);
user3.follow(user5);
user5.follow(user1);

user1.like(tweet2);
user1.like(tweet3);
user1.like(tweet4);
user1.like(tweet5);
user2.like(tweet1);
user2.like(tweet3);
user2.like(tweet4);
user2.like(tweet5);
user3.like(tweet1);
user3.like(tweet2);
user3.like(tweet4);
user3.like(tweet5);
user4.like(tweet1);
user4.like(tweet2);
user4.like(tweet3);
user4.like(tweet5);
user5.like(tweet1);
user5.like(tweet3);
user5.like(tweet4);
user5.like(tweet5);


// const reply1 = user2.reply(tweet1, "User2's response to tweet1");
const reply2 = user3.reply(tweet2, "User3's response to tweet2");
const reply3 = user4.reply(tweet3, "User4's response to tweet3");
const reply4 = user5.reply(tweet4, "User5's response to tweet4");
const reply5 = user1.reply(tweet5, "User1's response to tweet5");


for (const tweet of tweets) {
  console.log(`@${tweet.author.username}: ${tweet.content}`);
  console.log(`Likes: ${tweet.likes.length}`);
  console.log(`Replies: ${tweet.replies.length}`);

  const likesInfo = tweet.likes.map((like) => `@${like.user.username}`);
  if (likesInfo.length > 0) {
    console.log(`Likes from: ${likesInfo.join(", ")}`);
  } else {
    console.log("No one has liked it yet.");
  }

  const followers = users.filter((user) =>
    user.followers.some((follower) => follower.following === tweet.author)
  );
  if (followers.length > 0) {
    const followersInfo = followers.map((follower) => `@${follower.username}`);
    console.log(`Followers: ${followersInfo.join(", ")}`);
  } else {
    console.log("No followers.");
  }

  if (tweet.replies.length > 0) {
    console.log("Replies:");
    for (const reply of tweet.replies) {
      console.log(`  @${reply.user.username} replied to the tweet: ${reply.tweetOriginal.content}`);
      console.log(`  - ${reply.content}`);
    }
  } else {
    console.log("No answer.");
  }

  console.log("-------------------------------");
}

// console.log(`Tweets de @${user1.username}:`);
// for (const tweet of user1.tweets) {
//   console.log(`- ${tweet.content}`);
// }

// console.log("-------------------------------");

// for (const tweet of tweets) {
//   console.log(`ID do Tweet: ${tweet.id}`);
//   console.log(`@${tweet.author.username}: ${tweet.content} `);
//   console.log("-------------------------------");
// }

// function displayUserIDs() {
//   console.log('IDs dos Usuários:');
//   for (const user of users) {
//     console.log(`ID de ${user.username}: ${user.id}`);
//   }
// }

// displayUserIDs();
