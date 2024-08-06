import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import FormComponent from "./FormComponent";
import PostList from "./PostList";
import DataProvider from '../store/context';
import { useState } from "react";



import { Outlet } from 'react-router-dom';


function Profile({ user, onLogout }) {
  const [selectedTab , setSelectedTab] = useState("Home");
  return (
    <DataProvider>
    <div className="main-container">
      <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />

      <div className="content-container">
        <Header />
        {/*selectedTab === "Home"? <PostList/> :<FormComponent/> */}
        <Outlet/>
        
       
        <Footer />
      </div>
    </div>
    </DataProvider>
  );
}

export default Profile;
