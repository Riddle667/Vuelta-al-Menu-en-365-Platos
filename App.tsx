import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { MyColors } from './src/theme/AppTheme';

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
            placeholder= 'ejemplo@gmail.com'
            placeholderTextColor= '#FFFFFF'
            textAlign= 'center'
            keyboardType='email-address'
          />
        </View>

        <View style= {styles.formInput }>
          <Image
            style= { styles.formIcon }
            source={ require('./assets/lock.png') }
          />
          <TextInput
            style={ styles.formTextInput }
            placeholder= '***********'
            placeholderTextColor= '#FFFFFF'
            textAlign= 'center'
            keyboardType='default'
            secureTextEntry= {true}
          />
        </View>

        <View style= {{ marginTop: 30 }}>
          <RoundedButton text='INGRESAR'/>
        </View>

        <View style= { styles.formRegister }>
          <Text>¿No estás registrado?</Text>
          <Text style= { styles.formRegisterText }>Hazlo ahora</Text>
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
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 25
  },
  formIcon: {
    width: 30,
    height: 30
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30
  },
  formTextInput: {
    flex: 1,
    backgroundColor: MyColors.primary,
    borderWidth: 1,
    borderColor: MyColors.primary,
    borderRadius: 50, 
    color: 'white', 
    marginLeft: 10
    
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15, 
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: MyColors.primary,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: MyColors.primary,
    marginLeft: 10
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
