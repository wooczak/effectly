import { useCallback } from "react";
import GlobalStyle from "../../core/style/globalStyle";
import { Header, Wrapper, OrBlock, Input, Form, Label } from "./SignIn.styles";
import SocialSignIn from "../../components/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";

const SignIn = () => {
  const onPasswordVisibilityClick = useCallback(() => {}, []);

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
          <Label>
            Password
            <Input type="password" id="password" required />
            <PasswordVisibilityIcon
              src={}
              alt={`Icon displaying the password is`}
              onClick={onPasswordVisibilityClick}
            />
          </Label>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignIn;
