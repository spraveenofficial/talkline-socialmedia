import { CreatePost, RightSidebar, Sidebar } from "..";
import {
  Explore,
  Notification,
  Bookmark,
  Post,
  Profile,
  UserProfile,
  Setting,
} from "../../Pages";

const HomeComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <CreatePost />
    <RightSidebar />
  </div>
);

const ExploreComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Explore />
    <RightSidebar />
  </div>
);

const NotificationComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Notification />
    <RightSidebar />
  </div>
);

const BookMarkComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Bookmark />
    <RightSidebar />
  </div>
);

const PostComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Post />
    <RightSidebar />
  </div>
);
const ProfileComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Profile />
    <RightSidebar />
  </div>
);

const UserProfileComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <UserProfile />
    <RightSidebar />
  </div>
);
const SettingComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <Setting />
    <RightSidebar />
  </div>
);
export {
  BookMarkComponent,
  HomeComponent,
  ExploreComponent,
  NotificationComponent,
  PostComponent,
  SettingComponent,
  ProfileComponent,
  UserProfileComponent,
};
