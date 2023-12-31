import React, { useContext, useEffect, useState } from "react";

import { List } from "react-native-paper";

import { SafeArea } from "../components/util/safe-area";
import { Text } from "../components/typography/text-component";
import { Spacer } from "../components/typography/spacer-components";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";

import * as S from "./settings.styles";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeArea>
      <S.AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <S.SettingsAvatar />}
          {photo && <S.UserAvatar source={{ uri: photo }} />}
        </TouchableOpacity>
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
