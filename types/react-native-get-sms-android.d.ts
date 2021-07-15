/* eslint-disable no-var, vars-on-top */

declare module 'react-native-get-sms-android' {
  interface ReactNativeGetSMSAndroid {
    list: (
      filters: string,
      onError: (error: Error) => unknown,
      onSuccess: (count: number, smsList: string) => unknown,
    ) => void;
    delete: (_id: number, onError: (error: Error) => unknown, onSuccess: () => unknown) => void;
    autoSend: (phoneNumbers: string, onError: (error: Error) => unknown, onSuccess: () => unknown) => void;
  }

  declare const module: ReactNativeGetSMSAndroid | null;
  export default module;
}
