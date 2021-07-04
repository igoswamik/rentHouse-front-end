import React from "react";
import { useParams } from "react-router-dom";
import Notfound from "./Notfound";
import CitySubHeader from "./CitySubHeader";
import FilterBar from "./FilterBar";
import Post from "../Components/Post";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./CityListPage.css";
function CityListPage(props) {
  const { city } = useParams();

  return (
    <div className="top__container">
      <CitySubHeader city={city} />

      <Container className="mt-3 list__container">
        <div>
          <FilterBar />
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <Notfound /> */}
      </Container>
    </div>
  );
}

export default CityListPage;
