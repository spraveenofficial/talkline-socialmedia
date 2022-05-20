import { CreatePost, RightSidebar, Sidebar } from "..";

const HomeComponent = () => (
  <div className="flex relative h-full mobile:flex-col">
    <Sidebar />
    <CreatePost />
    <RightSidebar />
  </div>
);

export { HomeComponent };
