import React, { useState, useContext } from "react";

import { TextInput } from "react-native-paper";

import * as S from "./account.style";
import { Spacer } from "../../components/typography/spacer-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../components/typography/text-component";
import { getAuth } from "firebase/auth";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const auth = getAuth();

  return (
    <S.AccountBackground>
      <S.AccountCover />
      <S.Title>Meals To Go</S.Title>
      <S.AccountContainer>
        <TextInput
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(u) => setEmail(u)}
        />

        <Spacer size="large">
          <TextInput
            label="Password"
            textContentType="password"
            keyboardType="default"
            value={password}
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <S.AuthButton
            icon="login"
            loading={isLoading}
            disabled={isLoading}
            mode="contained"
            onPress={() => {
              onLogin(auth, email, password);
            }}
          >
            Login
          </S.AuthButton>
          {error?.length && (
            <>
              <Spacer size="large">
                <Text variant="error">{error}</Text>
              </Spacer>
            </>
          )}
        </Spacer>
      </S.AccountContainer>
      <Spacer size="large">
        <S.AuthButton
          mode="contained"
          icon="arrow-left"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Back
        </S.AuthButton>
      </Spacer>
    </S.AccountBackground>
  );
};
