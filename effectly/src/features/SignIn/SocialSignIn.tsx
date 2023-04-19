import { SignInBtn } from "./SocialSignIn.styles";

interface SocialSignInProps {
    src: string;
    altText: string;
    text: string;
};

const SocialSignIn = ({ src, altText, text }: SocialSignInProps) => {
    return (
        <SignInBtn>
            <img src={src} alt={altText} />
            <p>{text}</p>
        </SignInBtn>
    );
};

export default SocialSignIn;
