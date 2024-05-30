import { MyColors } from "../../theme/AppTheme";
import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
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
        height: '72%',
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
        top: '4%'
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

export default RegisterStyles;