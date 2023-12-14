import React, { useContext } from "react";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../Context/Context";
import { ToggleButton, ToggleDiv } from "../../stayled";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <ToggleDiv className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <ToggleButton
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></ToggleButton>
    </ToggleDiv>
  );
};

export default Toggle;
