import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="singlePage">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="userImg"
              />
            </div>
            <div className="details">
              <div className="detailTitle">Jane Doe</div>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="keyValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  Elton St. 234 Garden Yd. NewYork
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
