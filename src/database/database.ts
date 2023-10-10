import { User } from "../models/User";
import { Tweet } from "../models/Tweet";
import { Follower } from "../models/Follower";
import { Like } from "../models/Like";
import { Reply } from "../models/Reply";

const users: User[] = [];
const tweets: Tweet[] = [];
const followers: Follower[] = [];
const likes: Like[] = [];
const replies: Reply[] = [];

export { users, tweets, followers, likes, replies };
