import styled from 'styled-components'
import { ImageWrapper } from "../imageWrapper"

export const GalaxyBg = styled.section`
    width: 100%;
    height: calc(100vh - 45px);
    padding-top: 20px;
    padding-bottom: 20px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background-color: ${props=>props.theme.bodyBg};
    color: ${props=>props.theme.bodyText};
`

export const ProfileImage = styled(ImageWrapper)`
    border-radius: 300px;
    border: 5px solid ${props=>props.theme.accentColor};
    width: 300px;
`

export const Title = styled.h1`
    font-size: 3rem;
    width: auto;
    margin-top: 30px;
    text-align: center;
`

export const Subtitle = styled.p`
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
`

export const SocialContainer = styled.div`
    height:auto;
    display:flex;
    margin-top: 30px;
    color:${props=>props.theme.bodyText};

    .social-link{
        color:${props=>props.theme.bodyText};
        font-size: 4.8rem;
        margin-left: 5px;
        margin-right: 5px;
    }
`