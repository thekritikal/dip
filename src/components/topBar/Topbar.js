import React from 'react'
import { Redirect } from 'react-router';
import {TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink} from './TopbarElements';

const Topbar = ({isOpen, toggle}) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink to="/Man" onClick={toggle}>
                        Man
                    </TopbarLink>
                    <TopbarLink to="/Women" onClick={toggle}>
                        Women
                    </TopbarLink>
                    <TopbarLink to="/Sales" onClick={toggle}>
                        Sales
                    </TopbarLink>
                    <TopbarLink to="/Cart" onClick={toggle}>
                        Cart
                    </TopbarLink>
                </TopbarMenu>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar
