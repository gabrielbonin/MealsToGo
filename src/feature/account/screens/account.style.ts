import styled from "styled-components/native";
import { space } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: ${colors.bg.primary};
  width: 80%;
  padding: ${space[4]};
  margin-top: ${space[2]};
`;

export const AuthButton = styled(Button)`
  background-color: ${colors.brand.primary};
  padding: ${space[2]};
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  color: red;
  align-self: center;
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: black;
  align-self: center;
  margin-top: 8px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 80px;
  padding: ${space[2]};
`;
