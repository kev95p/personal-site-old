import styled from 'styled-components'
import { ImageWrapper } from "../imageWrapper"

export const ProfileImage = styled(ImageWrapper)`
    border-radius: 300px;
    border: 1px solid black;
    width: 300px;
    margin-top: 20px;
    align-self: center;
    justify-self: center;
`

export const Title = styled.h1`
    font-size: 3rem;
    width: auto;
    text-align: center;
`

export const GalaxyBg = styled.section`
    width: 100%;
    height: calc(100vh - 45px);
    padding-top: 20px;
    padding-bottom: 20px;
    position:relative;
    display:flex;
    flex-direction:column;
    background-color: ${props=>props.theme.bodyBg};
    color: ${props=>props.theme.bodyText};
`