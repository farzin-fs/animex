import React from 'react';
import {ColorValue, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from './Icon';

type TProps = {
  name: string;
  color?: ColorValue;
  onPress?: () => void;
};

const IconButton: React.FC<TProps> = ({name, color, onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} disabled={onPress === undefined}>
      <Icon name={name} size={26} color={color || colors.accent} />
    </TouchableOpacity>
  );
};

export default IconButton;
