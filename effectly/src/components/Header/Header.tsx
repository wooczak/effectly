import { HeaderWrapper } from "./Header.styles";
import { auth } from "../../firebase/firebase";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <HeaderWrapper className={className}>
      <p>effectly</p>
      <button onClick={() => auth.signOut()}>sign out</button>
    </HeaderWrapper>
  );
};

export default Header;
