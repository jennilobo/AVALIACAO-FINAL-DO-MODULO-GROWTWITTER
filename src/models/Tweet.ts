import { User } from "./User";
import { Like } from "./Like";
import { Reply } from "./Reply";
import { TweetType } from './enums';
import { v4 as uuidv4 } from 'uuid';

export class Tweet {
  id: string;
  content: string;
  type: TweetType;
  author: User;

  likes: Like[] = [];
  replies: Reply[] = [];

  constructor(
    author: User, content: string, type: TweetType) {
    this.id = uuidv4();
    this.content = content;
    this.author = author;
    this.type = type;
  }

  getLikesInfo(): string[] {
    return this.likes.map((like) => `@${like.user.username}`);
  }

  receiveLike(like: Like) {
    this.likes.push(like);
  }

  receiveReply(reply: Reply) {
    this.replies.push(reply);
  }
}

