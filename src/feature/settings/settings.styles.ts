import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const SettingsList = styled(List.Item)``;

export const SettingsAvatar = styled(Avatar.Icon).attrs((props) => ({
  ...props,
  size: 180,
  icon: "human",
  backgroundColor: "#2182BD",
}))``;
