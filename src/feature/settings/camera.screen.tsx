import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log(photo);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={{ width: "100%", height: "100%" }}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
      ref={(ref) => {
        cameraRef.current = ref;
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: "flex-end",
          alignItems: "center",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
        }}
        onPress={() => {
          snap();
          console.log("pressed");
        }}
      />
    </Camera>
  );
};
