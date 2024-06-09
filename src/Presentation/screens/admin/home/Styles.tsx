import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  form: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#B1B1B1',
    paddingBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 1,
    transform: [{ translateX: 5 }],
  },
  adminButton: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FF4141',
    borderRadius: 50,
    width: '100%',
  },
  adminButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 5,
    fontSize: 24,
  }
});
