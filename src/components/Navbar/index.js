import React from "react";
import { Link } from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';

const Navbar = () => {
  return (
    <div className="col-md-12 bgcolor py-2">
      <nav className="navbar bgcolor nav-nam">
         <SchoolIcon className="icon"/>
         Student Detail
      </nav>
    </div>
  );
};

export default Navbar;
