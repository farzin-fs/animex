import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, View } from 'react-native';
import { TDrawerNavigatorParams } from '../navigation/DrawerNavigator';
import styled from '../themes';
import IconButton from './IconButton';

const Container = styled(View)`
  ${() => (Platform.OS === 'web' ? 'padding-left: 16px;' : '')}
`;

type TProps = {
  route: string;
};

const NavIconButton: React.FC<TProps> = ({ route }) => {
  const navigation =
    useNavigation<DrawerNavigationProp<TDrawerNavigatorParams>>();

  if (
    (route === 'listing_tabs' || route === 'favorites_list') &&
    Platform.OS !== 'web'
  ) {
    return (
      <IconButton
        testID="nav-menu"
        name="menu-outline"
        onPress={navigation.toggleDrawer}
      />
    );
  }

  if (navigation.canGoBack()) {
    return (
      <Container>
        <IconButton name="chevron-back-outline" onPress={navigation.goBack} />
      </Container>
    );
  }

  return <></>;
};

export default NavIconButton;
