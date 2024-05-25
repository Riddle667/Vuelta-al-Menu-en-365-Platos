import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={ require('./assets/chef.jpg') } 
        style= {styles.imageBackground}
        />

      <View style={ styles.form }>

        <Text style={ styles.formText }>Iniciar Sesión</Text>

        <View style= {styles.formInput }>
          <Image
            style= { styles.formIcon }
            source={ require('./assets/email.png') }
          />
          <TextInput
            style={ styles.formTextInput }
            placeholder= 'Correo electronico'
          />
          </View>


      </View>

      <View style={ styles.logoContainer }>
        <Image
          source={ require('./assets/logo.png') }
          style={ styles.logoImage }
        />

        <Text style={ styles.logoText }>Vuelta al menu en 365 platos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },
  form:{
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 25
  },
  formIcon: {
    width: 25,
    height: 25
  },
  formInput: {
    flexDirection: 'row'
  },
  formTextInput: {
    //flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',

  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center', 
    top: '15%'
  },
  logoImage: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },

});
