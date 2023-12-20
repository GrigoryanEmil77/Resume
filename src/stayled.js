import styled from "styled-components";
import Wave from "./Img/wave.png";
import Email from "./Img/email.png";
import Phone from "./Img/phone-call.png";

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  margin: -0.5rem -3.5rem;
  position: relative;
`;
export const ContentDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  gap: 4rem;
  color: white;
  @media screen and (max-width: 650px) {
    transform: scale(0.5);
  }
`;
export const IconsDiv = styled.div`
  display: flex;
  gap: 2rem;
`;
export const FooterImg = styled.img`
  width: 100%;
`;
FooterImg.defaultProps = {
  src: Wave,
  alt: "",
};

export const Button = styled.button`
  background: linear-gradient(180deg, orange, rgb(216, 151, 29));
  box-shadow: 0px 20px 24px 3px rgba(84, 94, 233, 0.42);
  border-radius: 34px;
  border: none;
  color: white;
  font-size: 16px;
  padding: 11px 26px 11px 26px;
  &:hover {
    background: white;
    cursor: pointer;
    border: 1px solid blueCard;
    color: black;
  }
`;
export const AppDiv = styled.div`
  overflow: hidden;
  color: black;
  @media screen and (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`;
export const IntroDiv = styled.div`
  display: flex;
  padding: 0.5rem 7rem;
  margin-top: 6rem;
  @media screen and (max-width: 880px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  position: relative;
  flex: 17;
  flex-direction: column;
`;
export const DivIcons = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 0rem;
  > * {
    transform: scale(0.5);
  }
  @media screen and (max-width: 389px) {
    margin-top: 3rem;
    gap: 0rem;
  }
`;
export const ServicesDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Awesome = styled.a`
  display: flex;
  justify-content: center;
  font-size: 8.2rem;
  margin-top: 1rem;
`;

export const Div = styled.div``;
export const Ahref = styled.a``;
export const HeaderSpan = styled.span`
  color: black;
  font-weight: bold;
  font-size: 4rem;
`;
export const NameSpan = styled.span`
  color: blue;
  font-weight: bold;
  font-size: 3rem;
`;
export const EndSpan = styled.span`
  font-weight: 100;
  font-size: 1.8rem;
  color: rgb(93, 100, 100);
  margin-top: 10px;
`;

export const NavDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 7rem;
`;
export const BoyDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;
export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.h1`
  color: rgb(93, 100, 100);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
`;
export const MailImg = styled.img`
  width: 60px;
  height: 60px;
  @media screen and (max-width: 880px) {
    width: 30px;
    height: 30px;
  }
`;
MailImg.defaultProps = {
  src: Email,
  alt: "",
};

export const PhoneImg = styled.img`
  width: 60px;
  height: 60px;
  @media screen and (max-width: 880px) {
    width: 30px;
    height: 30px;
  }
`;
PhoneImg.defaultProps = {
  src: Phone,
  alt: "",
};
export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ContactForm = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 2rem;
  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(93, 100, 100);
  font-size: 2rem;
  font-weight: bold;
  gap: 1rem;
`;
export const SkillsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem 9.5rem;
`;
