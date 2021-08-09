import * as React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import $Icon from 'react-native-vector-icons/SimpleLineIcons';

export const Icon: React.FC<{ name: string; size: number; color: typeof Colors }> = ({ name, size, color }) => (
  <$Icon name={name} size={size} color={color} />
);
