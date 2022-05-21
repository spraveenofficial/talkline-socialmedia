import { combineReducers } from "redux";
import { auth, signup, verifyOtp, uploadAvatar, login } from "./auth-reducers";
import { profile, explore, myprofile } from "./profile-reducers";
import { newPost, feed, post, bookmark } from "./post-reducers";
import { notification } from "./notification-reducers";
import { message } from "./message-reducers";

export default combineReducers({
  auth,
  signup,
  verifyOtp,
  uploadAvatar,
  login,
  profile,
  explore,
  myprofile,
  newPost,
  feed,
  post,
  bookmark,
  notification,
  message,
});
