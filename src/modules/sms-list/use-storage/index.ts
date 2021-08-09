import * as React from 'react';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

export function useStorageSignIn(): { userInfo: User | null } {
  const [userInfo, setUserInfo] = React.useState<User | null>(null);
  React.useEffect(() => {
    GoogleSignin.configure();

    GoogleSignin.signIn().then(
      (newUserInfo) => setUserInfo(newUserInfo),
      (error) => {
        console.log(error.message);
        console.error(error);
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
        } else {
          // some other error
        }
      },
    );
  }, []);

  return { userInfo };
}
