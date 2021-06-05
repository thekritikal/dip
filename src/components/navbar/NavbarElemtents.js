import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: #ADACAC;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  margin-top: 0px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #blueviolet;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #blueviolet;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  margin-top: 25px;
  margin-left: 20px;
  padding: 2px 30px;
  background-color: blueviolet;
  color: #000;
  // font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: blueviolet;
  }
`;

export const MobileIcon = styled.nav`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #blueviolet;
  }
`;