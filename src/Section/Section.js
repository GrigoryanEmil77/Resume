import React, { useContext, useState } from "react";
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
import { themeContext } from "../components/Context/Context";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress, List } from "@mui/material";
import {
  BoyImg,
  Header,
  Div,
  BoyDiv,
  AboutDiv,
  Text,
  PhoneImg,
  MailImg,
  Ahref,
  Contact,
  ContactList,
  ContactForm,
  SkillsList,
  SkillsDiv,
} from "../stayled";

function Section() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
        <Header style={{ color: darkMode ? "white" : "" }}> ABOUT ME</Header>
        <BoyDiv>
          <BoyImg />
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
        <Header style={{ color: darkMode ? "white" : "" }}>
          PROFESSIONAL SKILLS
        </Header>
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
        <Header style={{ color: darkMode ? "white" : "" }}>LANGUAGE</Header>
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
                <CircularProgress
                  style={{ marginLeft: "30px" }}
                  color="success"
                  variant="determinate"
                  value={100}
                />
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
                <CircularProgress
                  style={{ marginLeft: "30px" }}
                  color="success"
                  variant="determinate"
                  value={80}
                />
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
                <CircularProgress
                  style={{ marginLeft: "30px" }}
                  color="success"
                  variant="determinate"
                  value={70}
                />
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
        <Header style={{ color: darkMode ? "white" : "" }}>SKILLS</Header>
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
                  <CircularProgress
                    style={{ marginLeft: "30px" }}
                    color="success"
                    variant="determinate"
                    value={100}
                  />
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
        <Header style={{ color: darkMode ? "white" : "" }}>CONTACT ME</Header>
        <ContactForm>
          <Contact className="contact">
            <Ahref href="mailto:egrigoryan264@gmail.com">
              <MailImg />
            </Ahref>
            <ContactList style={{ color: darkMode ? "white" : "" }}>
              egrigoryan264@gmail.com
            </ContactList>
          </Contact>
          <Contact>
            <Ahref href="tel:37441069001">
              <PhoneImg />
            </Ahref>
            <ContactList style={{ color: darkMode ? "white" : "" }}>
              041069001
            </ContactList>
          </Contact>
        </ContactForm>
      </Div>
    </Div>
  );
}
export default Section;
