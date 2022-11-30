import GlobalStyle from "../../core/style/globalStyle";
import { Header, Wrapper, OrBlock, Input, Form, Label } from "./SignIn.styles";
import SocialSignIn from "../../components/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";

const SignIn = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>effectly</Header>
        <Form method="get">
          <SocialSignIn
            src={GoogleBtnLight}
            altText="Google Logo"
            text="Sign in with Google"
          />
          <SocialSignIn
            src={AppleLogo}
            altText="Apple Logo"
            text="Sign in with Apple"
          />
          <OrBlock>or</OrBlock>
          <Label>
            E-mail
            <Input type="email" id="email" required />
          </Label>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignIn;
