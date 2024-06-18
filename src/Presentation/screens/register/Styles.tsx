import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '40%',
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50, // Ajustar según sea necesario
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    paddingTop: 10,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  form: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginTop: -15, // Ajustar para mover el formulario más hacia arriba o abajo
  },
  RegisterText: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputSection: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputImage: {
    backgroundColor: '#FF4141',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#FF4141',
    borderWidth: 1,
    borderRadius: 20,
    color: '#FF4141',
    fontWeight: '900',
    paddingLeft: 50, // Ajustar padding para evitar superposición con icono
    paddingVertical: 5,
  },
  registerButton: {
    backgroundColor: '#FF4141',
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
