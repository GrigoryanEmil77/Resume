import React, { useState } from "react";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiGit,
  DiGithub,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import boy from "../Img/em2.jpg";
import { Heading } from "@chakra-ui/react";
import {
  Div,
  BoyDiv,
  AboutDiv,
  Text,
  PhoneImg,
  MailImg,
  Ahref,
  Contact,
  ContactForm,
  SkillsList,
  SkillsDiv,
} from "../stayled";
import {
  CircularProgressLabel,
  CircularProgress,
  Image,
} from "@chakra-ui/react";

function Section() {
  const skills = [
    { id: 1, value: "Time Management" },
    { id: 2, value: "Effective Communication" },
    { id: 3, value: "Team Work" },
    { id: 4, value: "Attention To Detail" },
  ];
  const [list] = useState(skills);
  return (
    <Div className="section">
      <AboutDiv>
        <Heading as="h2" size="4xl" fontSize="50px" textAlign="center">
          ABOUT ME
        </Heading>

        <BoyDiv>
          <Image
            borderRadius="70px"
            boxSize="360px"
            objectFit="cover"
            src={boy}
            alt=""
          />
        </BoyDiv>
        <Text>
          Greetings! I'm Emil Grigoryan, a web developer.
          <br /> My passion lies in creating modern web applications that are
          both interactive and valuable to users.
          <br />
          I'm dedicated to continuous growth and stay up-to-datenwith the latest
          web development trends
          <br /> to enhance my skills further.Beyond coding,I find inspiration
          in music,sport,which help me
          <br />
          unwind and spark ideas for new projects.
        </Text>
      </AboutDiv>
      <Div>
        <Heading as="h2" size="4xl" fontSize="50px" textAlign="center">
          {" "}
          PROFESSIONAL SKILLS
        </Heading>

        <SkillsDiv>
          <DiHtml5 size={100} color="orange" />
          <DiCss3 size={100} color="blue" />
          <DiJavascript1 size={100} color="yellow" />
          <DiReact size={100} color="aqua" />
        </SkillsDiv>
      </Div>
      <SkillsDiv>
        <DiGit size={100} color="rgb(225, 96, 15)" />
        <DiGithub size={100} color="green" />
        <DiBootstrap size={100} color="blue" />
        <DiMysql size={100} color="red" />
      </SkillsDiv>
      <Div>
        <Heading as="h2" size="4xl" fontSize="50px" textAlign="center">
          LANGUAGE
        </Heading>
        <SkillsList>
          <List
            sx={{
              width: "100%",
              maxWidth: 500,
              bgcolor: "background.paper",
              borderRadius: "10px",
            }}
          >
            <ListItem
              disableGutters
              secondaryAction={
                <CircularProgress value={100} color="orange">
                  <CircularProgressLabel>100%</CircularProgressLabel>
                </CircularProgress>
              }
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: "30px" }}
                primary={`Armenian Native`}
              />
            </ListItem>
            <ListItem
              disableGutters
              secondaryAction={
                <CircularProgress value={80} color="orange">
                  <CircularProgressLabel>80%</CircularProgressLabel>
                </CircularProgress>
              }
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: "30px" }}
                primary={`Russian`}
              />
            </ListItem>
            <ListItem
              disableGutters
              secondaryAction={
                <CircularProgress value={70} color="orange">
                  <CircularProgressLabel>70%</CircularProgressLabel>
                </CircularProgress>
              }
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: "30px" }}
                primary={`English`}
              />
            </ListItem>
          </List>
        </SkillsList>
      </Div>
      <Div>
        <Heading as="h2" size="4xl" fontSize="50px" textAlign="center">
          SKILLS
        </Heading>
        <SkillsList>
          <List
            sx={{
              width: "100%",
              maxWidth: 500,
              bgcolor: "background.paper",
              borderRadius: "10px",
            }}
          >
            {list.map((name) => (
              <ListItem
                key={name.id}
                disableGutters
                secondaryAction={
                  <CircularProgress value={100} color="orange">
                    <CircularProgressLabel>100%</CircularProgressLabel>
                  </CircularProgress>
                }
              >
                <ListItemText
                  primaryTypographyProps={{ fontSize: "30px" }}
                  primary={`${name.value}`}
                />
              </ListItem>
            ))}
          </List>
        </SkillsList>
      </Div>

      <Div>
        <Heading as="h2" size="4xl" fontSize="50px" textAlign="center">
          CONTACT ME
        </Heading>
        <ContactForm>
          <Contact className="contact">
            <Ahref href="mailto:egrigoryan264@gmail.com">
              <MailImg />
            </Ahref>
            <Heading as="h2" size="4xl" fontSize="30px">
              egrigoryan264@gmail.com
            </Heading>
          </Contact>
          <Contact>
            <Ahref href="tel:37441069001">
              <PhoneImg />
            </Ahref>

            <Heading as="h2" size="4xl" fontSize="30px">
              041069001
            </Heading>
          </Contact>
        </ContactForm>
      </Div>
    </Div>
  );
}
export default Section;
