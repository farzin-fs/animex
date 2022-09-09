import React from 'react';
import { Button } from 'react-native';
import { Center, Spacer, TextPrimary, TextSecondary } from '.';

type TProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

const EmptyState: React.FC<TProps> = ({ title, message, onRetry }) => {
  return (
    <Center>
      {title && <TextPrimary>{title?.toUpperCase()}</TextPrimary>}
      <Spacer />
      {message && <TextSecondary>{message}</TextSecondary>}
      <Spacer size={8} />
      {onRetry && <Button title={'RETRY'} onPress={onRetry} />}
    </Center>
  );
};

export default EmptyState;
