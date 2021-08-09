import * as React from 'react';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

export function useStorageSignIn(): { userInfo: User | null; error: Error | null } {
  const [userInfo, setUserInfo] = React.useState<User | null>(null);
  const [errorMessage, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    GoogleSignin.configure();

    GoogleSignin.signInSilently().then(
      (newUserInfo) => setUserInfo(newUserInfo),
      async (signInSilentylError) => {
        if (signInSilentylError.code === statusCodes.SIGN_IN_REQUIRED) {
          try {
            const newUserInfo = await GoogleSignin.signIn();
            setUserInfo(newUserInfo);
          } catch (signInError) {
            setError(signInError);
          }
        } else {
          setError(signInSilentylError);
        }
      },
    );
  }, []);

  return { userInfo, error: errorMessage };
}
