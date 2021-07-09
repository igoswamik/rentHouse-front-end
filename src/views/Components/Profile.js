import React, { useState } from "react";
// import { Container, Row, Col } from 'reactstrap';
import "./Profile.css";

function Profile() {
  var [show, setShow] = useState(true);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="headers">
        <div className="displayPic">
          <img
            className="dp"
            src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
          ></img>
        </div>
        <div className="details">
          <div>
            <img
              className="edit"
              src="https://img.icons8.com/ios-glyphs/30/000000/edit--v4.png"
            />
          </div>
          <div className="row">
            <h3>Name:</h3>
            <p>abc xyz</p>
          </div>
          <div className="row">
            <h3>Phone:</h3>
            <p>2314134312</p>
          </div>
          <div className="row">
            <h3>Email:</h3>
            <p>abc@xyz</p>
          </div>
        </div>
        <div className="editHouse">
          <i class="fa fa-gear"></i>
        </div>
      </div>
      <div className="grid">
        <div className="itm">
          <img
            className="housePic"
            onClick={toggleShow}
            src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="post pic"
          ></img>
          <div className="houseDetails">
            <div className="det" style={{ display: show ? "flex" : "none" }}>
              <h2>Price</h2> <p>10000</p>
            </div>
            <div className="det" style={{ display: show ? "flex" : "none" }}>
              <h2>Size</h2> <p>3.4 sq m</p>
            </div>
            <div className="det" style={{ display: show ? "flex" : "none" }}>
              <h2>Bedroom</h2> <p>3</p>
            </div>
          </div>
        </div>
        <div className="itm">
          <img
            className="housePic"
            onClick={toggleShow}
            src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="post pic"
          ></img>

          {show && (
            <div className="houseDetails">
              <div className="det">
                <h2>Price</h2> <p>10000</p>
              </div>
              <div className="det">
                <h2>Size</h2> <p>3.4 sq m</p>
              </div>
              <div className="det">
                <h2>Bedroom</h2> <p>3</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
