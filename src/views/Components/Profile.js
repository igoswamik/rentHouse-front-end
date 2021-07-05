import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Profile.css"
import Post from "./Post"


function Profile() {
  return (<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="headers">
      <div className="displayPic"><img className="dp" src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"></img></div>
      <div className="details">
        <div><img className="edit" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v4.png"/></div>
        <div className="row"><h3>Name:</h3><p>abc xyz</p></div>
        <div className="row"><h3>Phone:</h3><p>2314134312</p></div>
        <div className="row"><h3>Email:</h3><p>abc@xyz</p></div>
      </div>
      <div className="editHouse"><i class="fa fa-gear"></i></div>
    </div>
    <div className="userPosts">
      <Post />
    </div>
  </div>);
}

export default Profile;
