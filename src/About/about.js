import React, { useContext } from "react";
import Github from "../Img/github.png";
import LinkedIn from "../Img/linkedin.png";
import Instagram from "../Img/instagram.png";
import Resume from "../About/resume.pdf";
import { themeContext } from "../components/Context/Context";
import { Link } from "react-scroll";
import {
  Ahref,
  Awesome,
  Button,
  Div,
  DivIcons,
  EndSpan,
  FooterImg,
  Header,
  HeaderSpan,
  IntroDiv,
  LeftDiv,
  NameDiv,
  NameSpan,
  ServicesDiv,
} from "../stayled";

function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <IntroDiv>
      <LeftDiv>
        <NameDiv>
          <HeaderSpan style={{ color: darkMode ? "white" : "" }}>
            Hy! I Am
          </HeaderSpan>
          <NameSpan>EMIL GRIGORYAN</NameSpan>
          <EndSpan>JUNIOR FRONT-END DEVELOPER</EndSpan>
        </NameDiv>
        <Link to={"contact"} smooth={true} spy={true}>
          <Button>Hire me</Button>
        </Link>

        <DivIcons>
          <Ahref>
            <FooterImg src={Github} alt="" />
          </Ahref>
          <Ahref>
            <FooterImg src={LinkedIn} alt="" />
          </Ahref>
          <Ahref>
            <FooterImg src={Instagram} alt="" />
          </Ahref>
        </DivIcons>
        <ServicesDiv className="services">
          <Div>
            <Header style={{ color: darkMode ? "white" : "" }}>
              My Resume
            </Header>
            <Awesome href={Resume} download>
              <Button>Download CV</Button>
            </Awesome>
          </Div>
        </ServicesDiv>
      </LeftDiv>
    </IntroDiv>
  );
}

export default About;
