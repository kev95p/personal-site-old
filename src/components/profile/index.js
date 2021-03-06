import React from "react"
import { ProfileImage, Title, GalaxyBg, Subtitle,SocialContainer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare,faTwitterSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Profile() {
  return (
    <GalaxyBg>
      <ProfileImage></ProfileImage>
      <Title>Kevin Pleitez</Title>
      <Subtitle>Fullstack developer</Subtitle>
      <SocialContainer>
        <a className="social-link" href="https://github.com/kev95p"> <FontAwesomeIcon height="48" icon={faGithubSquare}></FontAwesomeIcon></a>
        <a className="social-link" href="https://www.linkedin.com/in/kpleitez/"> <FontAwesomeIcon height="48" icon={faLinkedin}></FontAwesomeIcon></a>
        <a className="social-link" href="https://twitter.com/kv_pleitez"> <FontAwesomeIcon height="48" icon={faTwitterSquare}></FontAwesomeIcon></a>
      </SocialContainer>
    </GalaxyBg>
  )
}
