import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  item: {
    width: responsiveWidth(40),
    margin: responsiveWidth(2),
  },
  image: {
    width: responsiveWidth(40),
    height: responsiveHeight(20),
  },
  name: { color: "black", textAlign: "center", marginTop: 2 },
  title: {
    fontSize: responsiveFontSize(3),
    color: "#000",
    fontWeight: "bold",
    margin: responsiveWidth(2),
    textAlign: "left",
    marginLeft: responsiveWidth(7),
  },
});
