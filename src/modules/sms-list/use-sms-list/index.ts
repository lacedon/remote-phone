import React from 'react';
import SmsAndroid from 'react-native-get-sms-android';

import { Item, parseItem } from './parse-item';

export type { Item } from './parse-item';

export enum Boxes {
  inbox = 'inbox',
  sent = 'sent',
  draft = 'draft',
  outbox = 'outbox',
  failed = 'failed',
  queued = 'queued',
  all = '',
}

interface Options {
  box?: Boxes;
  from?: number;
  itemPerPage?: number;
}

export function useSMSList({
  box: defaultBox = Boxes.inbox,
  from: defaultFrom = 0,
  itemPerPage: maxCount = 10,
}: Options = {}): {
  itemPerPage: number;
  indexFrom: number;
  setIndexFrom: (value: number) => void;
  box: Boxes;
  setBox: (value: Boxes) => void;
  count: number;
  list: Item[] | null;
  error: Error | null;
  isLoading: boolean;
} {
  const [indexFrom, setIndexFrom] = React.useState(defaultFrom);
  const [box, setBox] = React.useState(defaultBox);
  const changeBox = React.useCallback(
    (value: Boxes) => {
      setBox(value);
      setIndexFrom(0);
    },
    [setBox, setIndexFrom],
  );
  const [data, setData] = React.useState<{ count: number; list: Item[] } | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!SmsAndroid) {
      return;
    }

    setIsLoading(true);
    SmsAndroid.list(
      JSON.stringify({ box, indexFrom, maxCount }),
      (fail: Error) => {
        setError(fail);
        setIsLoading(false);
      },
      (count: number, smsList: string) => {
        setData({ count, list: JSON.parse(smsList).map(parseItem) });
        setIsLoading(false);
      },
    );
  }, [box, indexFrom, maxCount]);

  return {
    indexFrom,
    setIndexFrom,
    box,
    itemPerPage: maxCount,
    setBox: changeBox,
    count: data?.count || 0,
    list: data?.list || null,
    error,
    isLoading,
  };
}
