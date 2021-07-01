import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./FilterBar.css";
const FilterBar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="bar">
      <span className="filter">Filter </span>
    </div>
    // <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    //   <DropdownToggle caret>Filter</DropdownToggle>
    //   {/* <DropdownMenu>
    //     <DropdownItem header>Header</DropdownItem>
    //     <DropdownItem disabled>Action</DropdownItem>
    //     <DropdownItem>Another Action</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Another Action</DropdownItem>
    //   </DropdownMenu> */}
    // </ButtonDropdown>
  );
};

export default FilterBar;
