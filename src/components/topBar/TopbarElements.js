import styled from  'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const TopbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ADACAC;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover{
      color: blueviolet;
      transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const TopbarWrapper = styled.div`
  color: #fff;
`;

export const TopbarMenu = styled.ul`
  display: grid;
  grid-tamplate-columns: 1fr;
  grid-tamplate-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-tamplate-rows: repeat(4, 60px);
  }
`;

export const TopbarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover{
      color: blueviolet;
      transition: 0.2s ease-in-out;
  }
`;

export const TopbarRoute = styled.div`
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #ADACAC;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #black;
  }
`;