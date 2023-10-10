import { User } from "./User";
import { Tweet } from "./Tweet";

export class Reply {
  user: User;
  tweetOriginal: Tweet;
  content: string;
  tweet: Tweet | undefined;

  constructor(user: User, tweetOriginal: Tweet, content: string) {
    this.user = user;
    this.tweetOriginal = tweetOriginal;
    this.content = content;
  }
}


