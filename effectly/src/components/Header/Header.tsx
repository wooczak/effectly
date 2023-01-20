import {
  HeaderWrapper,
  Logo,
  LogOutBtn,
  ThemeToggle,
  ButtonsWrapper,
  Toggle,
} from "./Header.styles";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import {
  toggleDarkTheme,
  toggleLightTheme,
  useGlobalTheme,
} from "../../store/theme/themeSlice";
import { useState } from "react";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const dispatchToStore = useDispatch();
  const { theme } = useGlobalTheme();
  const [togglePosition, setTogglePosition] = useState("");

  const signOut = () => auth.signOut();
  const toggleTheme = () => {
    theme.name === "lightTheme"
      ? dispatchToStore(toggleDarkTheme())
      : dispatchToStore(toggleLightTheme());

    togglePosition === ""
      ? setTogglePosition("5px")
      : setTogglePosition("");
  };

  return (
    <HeaderWrapper className={className}>
      <Logo>effectly</Logo>
      <ButtonsWrapper>
        <ThemeToggle onClick={toggleTheme} flexPosition={togglePosition}>
          <Toggle toggled={togglePosition} />
        </ThemeToggle>
        <LogOutBtn onClick={signOut}>Log out</LogOutBtn>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
