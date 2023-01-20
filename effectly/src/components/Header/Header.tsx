import { HeaderWrapper, Logo, LogOutBtn } from "./Header.styles";
import { auth } from "../../core/firebase/firebase";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const signOut = () => auth.signOut();

  return (
    <HeaderWrapper className={className}>
      <Logo>effectly</Logo>
      <LogOutBtn onClick={signOut}>Log out</LogOutBtn>
    </HeaderWrapper>
  );
};

export default Header;
