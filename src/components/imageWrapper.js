import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const ImageWrapper = ({className,children}) =>(
    <StaticImage className={className}  src="../images/profile.jpg" alt="profile image" width={300} placeholder="blurred">{children}</StaticImage>
  );