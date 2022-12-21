import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/users/userSlice";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const dispatchToStore = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        dispatchToStore(login(user));
        navigate("/");
      } else {
        dispatchToStore(logout());
        navigate("/sign-in");
      }
    });
  }, []);
};

export default useCurrentUser;
