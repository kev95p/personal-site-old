import styled from 'styled-components'
import {Link} from 'gatsby'

export const Navbar = styled.nav`
    background-color: ${props=>props.theme.navBg};
    position: relative;
    width: 100%;
    height: auto;
`

export const Menu = styled.ul`
    display:flex;
    position: relative;
    margin: 0 auto;
    justify-content:center;

    font-size: 1.5em;
    font-weight: 600;

`

export const ItemMenu = styled.li`
    padding: 10px;
    list-style-type:none;
    padding: 0;
`

export const Anchor = styled(Link)`

    text-decoration:none;
    padding: 10px;
    display:block;
    color: ${props=>props.theme.navText};
    &:hover{
        background-color: ${props=>props.theme.linkActiveBg};
        border-bottom: 5px solid ${props=>props.theme.linkActiveBg};
    }
    &.active-link{
        background-color: ${props=>props.theme.linkActiveBg};
        border-bottom: 5px solid #056162
    }
`