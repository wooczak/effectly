import { HeaderWrapper, Logo } from "./Header.styles";
import { auth } from "../../firebase/firebase";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <HeaderWrapper className={className}>
      <Logo>effectly</Logo>
      <button onClick={() => auth.signOut()}>sign out</button>
    </HeaderWrapper>
  );
};

export default Header;
