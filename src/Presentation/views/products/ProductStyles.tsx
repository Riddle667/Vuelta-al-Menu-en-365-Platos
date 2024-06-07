import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  input: {
    // flex: 1,
    backgroundColor: MyColors.primary,
    borderWidth: 1,
    borderColor: MyColors.primary,
    borderRadius: 50, 
    color: 'white', 
    marginLeft: 10,
    marginBottom: 10,
  },
  button: {
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  imagePickerButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form:{
    width: '110%',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
    alignContent: 'center',
    
  },
  logoText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
});