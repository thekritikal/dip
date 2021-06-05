import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { CgSearch } from 'react-icons/cg'
import { AiOutlineMinus } from 'react-icons/ai'

export const SidebarContent = styled.nav`
  padding-top: 10px;
  height: 1000px;
  width: 350px;
  background-color: #ADACAC;
`;

export const SidebarContainer = styled.nav`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-top: 20px;
    margin-right: auto;
    width: 300px;
    background-color: #C4C4C4;
`

export const SearchIcon = styled(CgSearch)`
  color: black;
  margin-right: auto;
  height: 30px;
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color: blueviolet;
    transition: 0.2s ease-in-out;
}
`;

export const HideIcon = styled(AiOutlineMinus)`
  color: black;
  margin-left: auto;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color: blueviolet;
    transition: 0.2s ease-in-out;
}
`;