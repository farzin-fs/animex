import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import styled from '../themes';
import IconButton from './IconButton';
import Spacer from './Spacer';

const Container = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled(TextInput)`
  flex: 1;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 4px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

type TProps = {
  onSubmit: (value: string) => void;
};

const SearchBar: React.FC<TProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Input
        placeholder="Search"
        onChangeText={(text: string) => setValue(text)}
        onSubmitEditing={(
          event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
        ) => onSubmit(event.nativeEvent.text)}
        blurOnSubmit={false}
      />
      <Spacer />
      <IconButton name="search-outline" onPress={() => onSubmit(value)} />
    </Container>
  );
};

export default SearchBar;
