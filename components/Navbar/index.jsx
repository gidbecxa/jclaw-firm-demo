import React, { useState }  from 'react';

import ChildNavbar from './ChildNavbar';
import Sidebar from "./Sidebar/index";
import { theme } from '../Theme';
import styled from 'styled-components';

function Navbar() {

  const NavbarHeader = styled.div`
    width: 100%;
    /*background: linear-gradient(120deg, #1D1A26 25%, #A51C30 100%);*/
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px 0px;
    display: grid;
    place-items:center;
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      padding: 16px 0px;
    }
  `
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarHeader>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ChildNavbar toggle={toggle} />
    </NavbarHeader>
  );
}

export default Navbar;
