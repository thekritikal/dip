import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'

export const DelBtn = styled(GrClose)`
  color: black;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid black;
  &:hover{
    color: blueviolet;
    transition: 0.2s ease-in-out;
    font-weight: bold;
}
`