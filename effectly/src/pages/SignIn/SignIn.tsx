import {
  Header,
  Wrapper,
  OrBlock,
  Form,
  FlexBlock,
  LogInBtn,
} from "./SignIn.styles";
import useSignIn from "../../hooks/SignIn/useSignIn/useSignIn";
import SocialSignIn from "../../features/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";
import MailInput from "../../features/SignIn/Inputs/MailInput";
import PasswordInput from "../../features/SignIn/Inputs/PasswordInput";
import { Globals, SignIn as SignInText } from "../../core/variables/variables";

const SignIn = () => {
  const { emailInput, passwordInput, handleEmailFormSubmit } = useSignIn();

  return (
    <>
      <Wrapper>
        <Header>{Globals.EFFECTLY}</Header>
        <Form method="get" onSubmit={(e) => handleEmailFormSubmit(e)}>
          <SocialSignIn
            src={GoogleBtnLight}
            altText={SignInText.GOOGLE.ALT}
            text={SignInText.GOOGLE.TEXT}
          />
          <SocialSignIn
            src={AppleLogo}
            altText={SignInText.APPLE.ALT}
            text={SignInText.APPLE.TEXT}
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
              {SignInText.NOT_A_MEMBER}{" "}
              <a>
                <u>{SignInText.SIGN_UP_NOW}</u>
              </a>
            </p>
            <p>{SignInText.FORGOT_PASSWORD}</p>
          </FlexBlock>
          <LogInBtn type="submit" data-cy="submit-login">
            {SignInText.LOG_IN}
          </LogInBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignIn;
