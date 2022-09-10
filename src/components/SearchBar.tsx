import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useDebounce } from '../hooks';
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
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

type TProps = {
  onChange: (value: string) => void;
};

const SearchBar: React.FC<TProps> = ({ onChange }) => {
  const { colors } = useTheme();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <Container>
      <Input
        testID="input-search"
        placeholder="Search"
        onChangeText={(text: string) => setValue(text)}
        blurOnSubmit={false}
        returnKeyType={'search'}
        placeholderTextColor={colors.textSecondary}
        selectionColor={colors.accent}
      />
      <Spacer />
      <IconButton name="search-outline" />
    </Container>
  );
};

export default SearchBar;
