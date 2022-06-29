import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Column, Button, Dropdown } from 'rbx';
import LogoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UsersService from '../../services/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Link, useLinkClickHandler } from "react-router-dom";


const HeaderLogged = (props) => {

   const [NavigateToHome, setNavigateToHome] = useState(false);

   const getUserName = () => {
      const username = JSON.parse(localStorage.getItem('user'));
      return username.name;
   }

   const logOut = async () => {
      await UsersService.logout();
      setNavigateToHome(true);
   }

   if (NavigateToHome == true)
      return <Navigate to={{ pathname: "/" }} />

   return (
      <Navbar className="navbar-logged">
         <Navbar.Brand>
            <Column.Group>
               <Column size="11" offset="1">
                  <Link to="/notes">
                     <img src={LogoImage} />
                  </Link>
               </Column>
            </Column.Group>
         </Navbar.Brand>

         <Navbar.Menu >

            <Navbar.Segment as="div" className="navbar-item navbar-end" align="end">
               <Navbar.Item as="div">
                  <Dropdown>
                     <Dropdown.Trigger>
                        <Button className="button is-white" outlined>
                           <span>{getUserName()} ▼</span>
                        </Button>
                     </Dropdown.Trigger>
                     <Dropdown.Menu>
                        <Dropdown.Content>
                           <Dropdown.Item as="div">
                              <Link to="/notes">Notes</Link>
                           </Dropdown.Item>
                           <Dropdown.Divider />
                           <Dropdown.Item as="div">
                              <a href="#" onClick={e => logOut()}>LogOut</a>
                           </Dropdown.Item>
                        </Dropdown.Content>
                     </Dropdown.Menu>
                  </Dropdown>
               </Navbar.Item>
            </Navbar.Segment>
         </Navbar.Menu>
      </Navbar>
   )
}

export default HeaderLogged;