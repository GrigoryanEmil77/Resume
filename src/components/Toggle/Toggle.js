import React, { useContext } from "react";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import styled from "styled-components";
import { themeContext } from "../Context/Context";

const Toggle = () => {
  const ToggleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px solid rgb(18, 11, 152);
    border-radius: 1rem;
    position: relative;
    padding: 2px;
    cursor: pointer;
    > * {
      width: 1.5rem;
      height: 1.5rem;
      color: blue;
    }
  `;
  const ToggleButton = styled.button`
    border-radius: 100%;
    background: blue;
    position: absolute;
  `;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <ToggleDiv onClick={handleClick}>
      <Moon />
      <Sun />
      <ToggleButton
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></ToggleButton>
    </ToggleDiv>
  );
};

export default Toggle;
