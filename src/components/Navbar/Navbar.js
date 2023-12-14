import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../Context/Context";
import { Button, NavDiv, NavbarDiv } from "../../stayled";

const Navbari = () => {
  const [open, setOpen] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <header
        style={{ backgroundColor: "orange" }}
        className="border-b border-white py-2 bg-gradient-to-br "
      >
        <div className="flex justify-between items-center p-2 px-[1%] flex-wrap">
          <Toggle />
          <div className="ml-3">
            <span
              style={{
                fontSize: "3rem",
                fontFamily: "Georgia, Times New Roman, Times, serif",
              }}
              className="bg-gradient-to-br from-blue-500 to-black bg-clip-text text-transparent font-bold logo "
            >
              <i>Emil</i>
            </span>
          </div>
          <FiMenu
            className="lg:hidden block h-10 w-10 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "" : "hidden"
            } lg:flex flex-row-reverse lg:w-auto w-full`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold"></li>
              <div
                style={{
                  color: darkMode ? "white" : "black",
                  fontSize: "1rem",
                }}
                className="flex flex-col-reverse items-center space-x-10 mr-8  -tracking-tighterr font-semibold"
              >
                <NavbarDiv>
                  <NavDiv>
                    <Link
                      activeClass="active"
                      to={"Navbar"}
                      spy={true}
                      smooth={true}
                    >
                      <button>Home</button>
                    </Link>
                    <Link to={"section"} spy={true} smooth={true}>
                      <button> About</button>
                    </Link>
                    <Link to={"services"} spy={true} smooth={true}>
                      <button>MyResume</button>
                    </Link>
                    <Link to={"footer"} spy={true} smooth={true}>
                      <button>Link</button>
                    </Link>
                    <Link to={"contact"} spy={true} smooth={true}>
                      <Button>Contact</Button>
                    </Link>
                  </NavDiv>
                </NavbarDiv>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbari;
