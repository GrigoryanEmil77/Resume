import { useContext } from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import { NavDiv } from "../../stayled";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { themeContext } from "../Context/Context";

const Navbari = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <NavDiv
        style={{
          border: darkMode ? "solid blue" : "solid orange",
        }}
      >
        <Toggle />
        <Menu>
          <Text fontSize="55px" as="u" color="tomato">
            Emil
          </Text>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="tomato"
            fontSize={55}
          />
          <MenuList>
            <MenuItem fontSize={25}>
              <Link to={"section"} spy={true} smooth={true}>
                About
              </Link>
            </MenuItem>
            <MenuItem fontSize={25}>
              <Link to={"services"} spy={true} smooth={true}>
                MyResume
              </Link>
            </MenuItem>
            <MenuItem fontSize={25}>
              <Link to={"footer"} spy={true} smooth={true}>
                Link
              </Link>
            </MenuItem>
            <MenuItem fontSize={25}>
              <Link to={"contact"} spy={true} smooth={true}>
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </NavDiv>
    </>
  );
};

export default Navbari;
