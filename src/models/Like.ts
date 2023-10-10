import { User } from "./User";
import { Tweet } from "./Tweet";

export class Like {
  user: User;
  tweet: Tweet;

  constructor(user: User, tweet: Tweet) {
    this.user = user;
    this.tweet = tweet;
  }
}


