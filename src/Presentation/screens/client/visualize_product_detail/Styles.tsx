import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    width: 300,
    height: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "black",
    transform: [{ translateX: -150 }, { translateY: -300 }],
  },
  modalInactive: {
    display: 'none',
  },
  button: {
    backgroundColor: 'white',
  }
});