import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CustomComponents } from "../../components";
import { styles } from "./Style";

import {
  ViroARScene,
  ViroARImageMarker,
  ViroImage,
} from "@viro-community/react-viro";

const CameraScreen = () => {
  // navigation
  const navigation = useNavigation();
  //route
  const route = useRoute();
  const { item } = route.params;
  const backButtonAction = () => {
    navigation.goBack();
  };
  return (
    <CustomComponents.SafeAreaView style={styles.container}>
      <>
        <TouchableOpacity
          onPress={() => backButtonAction()}
          style={styles.backButton}
        >
          <Image
            style={styles.backButtonImage}
            source={require("../../assets/images/arrow.png")}
          />
        </TouchableOpacity>
        <ViroARScene>
          <ViroARImageMarker target={"your_image_name"}>
            <ViroImage
              height={0.5} // Adjust the height of the image
              width={0.5} // Adjust the width of the image
              source={{ uri: item?.uri }} // Provide the URL of your 2D image
            />
          </ViroARImageMarker>
        </ViroARScene>
      </>
    </CustomComponents.SafeAreaView>
  );
};

export default CameraScreen;
