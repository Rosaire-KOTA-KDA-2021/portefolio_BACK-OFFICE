import React from "react";
import { ProjectsStore } from "../../components/projects/ProjectStore";
import SideBar from "../../components/shared/Sidebar/SideBar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="body">
        <ProjectsStore />
      </div>
    </div>
  );
};
export default Dashboard;
