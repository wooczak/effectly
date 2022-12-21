import GlobalStyle from "../../core/style/globalStyle";
import {
  Header,
  Wrapper,
  OrBlock,
  Form,
  FlexBlock,
  LogInBtn,
} from "./SignIn.styles";
import useEmailSignIn from "../../hooks/SignIn/useEmailSignIn";
import SocialSignIn from "../../components/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";
import MailInput from "../../components/SignIn/Inputs/MailInput";
import PasswordInput from "../../components/SignIn/Inputs/PasswordInput";

const SignIn = () => {
  const { emailInput, passwordInput, handleFormSubmit } = useEmailSignIn();

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Header>effectly</Header>
        <Form method="get" onSubmit={handleFormSubmit}>
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
          <MailInput label="E-mail" ref={emailInput} />
          <PasswordInput label="Password" ref={passwordInput} />
          <FlexBlock>
            <p>
              Not a member? <a>Sign up now</a>
            </p>
            <p>Forgot password?</p>
          </FlexBlock>
          <LogInBtn type="submit">Log In</LogInBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignIn;
