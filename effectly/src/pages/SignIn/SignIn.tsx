import GlobalStyle from "../../core/style/globalStyle";
import { Header, Wrapper, OrBlock } from "./SignIn.styles";
import SocialSignIn from "../../components/SignIn/SocialSignIn";
import GoogleBtnLight from "../../assets/icons/GoogleBtnLight.svg";
import AppleLogo from "../../assets/icons/AppleLogo.svg";

const SignIn = () => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header>effectly</Header>
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
            </Wrapper>
        </>
    );
};

export default SignIn;
