import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  form: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    transform: [{ translateY: -200 }],
  },
  image: {
    width: '100%',
    height: '60%',
  },
  RegisterText: {
    fontSize: 30,
    fontWeight: '500',
    width: "100%",
    textAlign: 'center',
  },
  inputSection: {
    width: '100%',
    marginTop: 30,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginBottom: 20,
  },
  inputImage: {
    backgroundColor: '#FF4141',
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
    transform: [{ translateX: -165 }],
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#FF4141',
    borderWidth: 1,
    borderRadius: 50,
    color: '#FF4141',
    fontWeight: '900',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#FF4141',
    borderRadius: 50,
    width: '100%',
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 5,
    fontSize: 20,
  }
});
