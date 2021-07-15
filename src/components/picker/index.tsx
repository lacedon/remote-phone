import React from 'react';
import ModalSelector, { IOption } from 'react-native-modal-selector';

/*
export interface Option<Value> {
  value: Value;
  label: string;
}
interface SelectorOption {
  key: React.Key;
  label?: string;
  section?: boolean;
  accessibilityLabel?: string;
  component?: React.ReactNode;
  [key:string]: any;
}
*/

export type { IOption as Option } from 'react-native-modal-selector';

type RenderItem = (data: {
  item: IOption;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}) => React.ReactElement | null;

export const Picker: React.FC<{
  options: IOption[];
  value?: string;
  onChange: (option: IOption) => unknown;
  renderItem?: RenderItem;
}> = ({ options, value, onChange, renderItem }) => (
  <ModalSelector
    data={options}
    initValue={value}
    onChange={onChange}
    renderItem={renderItem as RenderItem | null | undefined}
  />
);
