import React from "react";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import {
  FooterDiv,
  ContentDiv,
  IconsDiv,
  FooterImg,
  Ahref,
} from "../../stayled";

const Footer = () => {
  return (
    <FooterDiv className="footer">
      <FooterImg />
      <ContentDiv>
        <IconsDiv>
          <Ahref >
            <Insta color="white" size={"4rem"} />
          </Ahref>
          <Ahref >
            <Linkedin color="white" size={"4rem"} />
          </Ahref>
          <Ahref>
            <Gitub color="white" size={"4rem"} />
          </Ahref>
        </IconsDiv>
      </ContentDiv>
    </FooterDiv>
  );
};

export default Footer;
