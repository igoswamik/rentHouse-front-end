import React from "react";
import { useParams } from "react-router-dom";

function CityListPage(props) {
  const { city } = useParams();
  console.log(city);
  return (
    <div>
      <h1>List of Houses in {city} city</h1>
    </div>
  );
}

export default CityListPage;
