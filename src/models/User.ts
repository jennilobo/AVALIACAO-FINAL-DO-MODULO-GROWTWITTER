import { Tweet } from "./Tweet";
import { Like } from "./Like";
import { Reply } from "./Reply";
import { Follower } from "./Follower";
import { TweetType } from './enums';
import { v4 as uuidv4 } from 'uuid';

export class User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;

  tweets: Tweet[] = [];
  followers: Follower[] = [];
  likes: Like[] = [];
  replies: Reply[] = [];

  constructor(username: string, name: string, email: string, password: string) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }


  createTweet(content: string, type: TweetType = TweetType.Normal): Tweet {
    const tweet = new Tweet(this, content, type);
    this.tweets.push(tweet);

    return tweet;
  }


  follow(userFollow: User) {
    const follower = new Follower(this, userFollow);
    this.followers.push(follower);
  }

  like(tweet: Tweet) {
    const like = new Like(this, tweet);
    this.likes.push(like);
    tweet.receiveLike(like);
  }

  reply(tweet: Tweet, content: string) {
    const reply = new Reply(this, tweet, content);
    this.replies.push(reply);
    tweet.receiveReply(reply);
  }
}


