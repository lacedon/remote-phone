import * as React from 'react';

export function useError(...errors: (Error | null)[]): Error | null {
  return React.useMemo(
    () => {
      for (const error of errors) {
        if (error) {
          return error;
        }
      }
      return null;
    },
    // errors passed as array itself
    // eslint-disable-next-line react-hooks/exhaustive-deps
    errors,
  );
}
