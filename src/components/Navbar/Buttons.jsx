import React from 'react';

import { NavLink } from 'react-router-dom';

function Buttons() {
  return (
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-warning">
              <i className="fa fa-sign-in"> Login</i>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-warning ms-2">
              <i className="fa fa-user-plus"> Register</i>
              </NavLink>
              
            </div>
    
    );
}

export default Buttons