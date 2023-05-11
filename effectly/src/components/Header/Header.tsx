import { HeaderWrapper, Logo, LogOutBtn } from "./Header.styles";
import { auth } from "../../core/firebase/firebase";
import { Globals } from "../../core/variables";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const signOut = () => auth.signOut();

  return (
    <HeaderWrapper className={className}>
      <Logo>{Globals.EFFECTLY}</Logo>
      <LogOutBtn onClick={signOut}>{Globals.LOG_OUT}</LogOutBtn>
    </HeaderWrapper>
  );
};

export default Header;
