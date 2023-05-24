import React from "react";

import * as S from "./account.style";
import { Spacer } from "../../components/typography/spacer-components";

export const AccountScreen = ({ navigation }) => {
  return (
    <S.AccountBackground>
      <S.AccountCover />
      <S.Title>Meals To Go</S.Title>
      <S.AccountContainer>
        <S.AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </S.AuthButton>
        <Spacer size="large">
          <S.AuthButton
            mode="contained"
            icon="account-plus"
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </S.AuthButton>
        </Spacer>
      </S.AccountContainer>
    </S.AccountBackground>
  );
};
