import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  } from 'firebase/auth';
import useAxiosPublic from '../CustomHooks/AxiosPublic';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const axiosPublic=useAxiosPublic()
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [newUser,setNewUser]=useState([])
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };
  // set user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      if (currentUser) {
        axiosPublic.post('/jwt', loggedUser).then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        });
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic, auth, user?.email]);
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    newUser,setNewUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
