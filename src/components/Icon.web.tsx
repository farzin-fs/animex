// @ts-nocheck

import React from 'react';
import {ColorValue} from 'react-native';

type TProps = {
  name: string;
  size: number;
  color: ColorValue;
};

const Icon: React.FC<TProps> = ({name, size, color}) => (
  <>
    <ion-icon name={name} />
    <style type="text/css">
      {`ion-icon[name=${name}] { color: ${color}; font-size: ${size}px; }`}
    </style>
  </>
);

export default Icon;
