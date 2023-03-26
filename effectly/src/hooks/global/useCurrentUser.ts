import { useEffect } from "react";
import { auth } from "../../core/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/users/userSlice";
import { User, UserRootState } from "../../store/users/types";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const dispatchToStore = useDispatch();

  // Redirect when user is not logged in - otherwise, add him to global store
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

  // Retrieve the currently signed in user from the store
  const { user } = useSelector<UserRootState, User>((state) => state.user);

  return user;
};

export default useCurrentUser;
