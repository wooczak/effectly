import {
  Header,
  Wrapper,
  OrBlock,
  Form,
  FlexBlock,
  LogInBtn,
} from "./SignIn.styles";
import useSignIn from "../../hooks/SignIn/useSignIn/useSignIn";
import SocialSignIn from "../../components/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";
import MailInput from "../../components/SignIn/Inputs/MailInput";
import PasswordInput from "../../components/SignIn/Inputs/PasswordInput";
import { ThemeProvider } from "styled-components";
import { useGlobalTheme } from "../../store/theme/themeSlice";
import GlobalStyle from "../../core/style/globalStyle";

const SignIn = () => {
  const { emailInput, passwordInput, handleEmailFormSubmit } = useSignIn();
  const { theme } = useGlobalTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header>effectly</Header>
          <Form method="get" onSubmit={(e) => handleEmailFormSubmit(e)}>
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
            <MailInput label="E-mail" ref={emailInput} testId="mail-input" />
            <PasswordInput
              label="Password"
              ref={passwordInput}
              testId="password-input"
            />
            <FlexBlock>
              <p>
                Not a member?{" "}
                <a>
                  <u>Sign up now</u>
                </a>
              </p>
              <p>Forgot password?</p>
            </FlexBlock>
            <LogInBtn type="submit" data-cy="submit-login">
              Log In
            </LogInBtn>
          </Form>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default SignIn;
