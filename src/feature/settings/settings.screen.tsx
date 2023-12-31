import React, { useContext } from "react";

import { List } from "react-native-paper";

import { SafeArea } from "../components/util/safe-area";
import { Text } from "../components/typography/text-component";
import { Spacer } from "../components/typography/spacer-components";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import * as S from "./settings.styles";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <S.AvatarContainer>
        <S.SettingsAvatar />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </S.AvatarContainer>

      <List.Section>
        <S.SettingsList
          title="Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => {
            navigation.navigate("Favourites");
          }}
          description="View your favourites"
        />
        <S.SettingsList
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => {
            onLogout();
          }}
        />
      </List.Section>
    </SafeArea>
  );
};
