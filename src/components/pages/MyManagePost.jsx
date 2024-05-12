import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyNeedPost from "./MyVolunteer/MyNeedPost";
import MyRequest from "./MyVolunteer/MyRequest";

const MyManagePost = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold text-center">My Manage Post</h1>
      <Tabs className="my-6">
        <div className="flex justify-center">
          <TabList>
            <Tab>My Need Volunteer</Tab>
            <Tab>My Volunteer Request</Tab>
          </TabList>
        </div>

        <div className="lg:mx-8 p-5">
          <TabPanel>
            <MyNeedPost />
          </TabPanel>
          <TabPanel>
            <MyRequest />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default MyManagePost;
