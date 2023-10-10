import { User } from "./User";

export class Follower {
  follower: User;
  following: User;

  constructor(follower: User, following: User) {
    this.follower = follower;
    this.following = following;
  }
}


