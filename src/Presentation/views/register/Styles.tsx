import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    LoginScreen: {
        flex: 1,
        backgroundColor: 'black',
    },

    ImageBackground: {
        width: '100%',
        height: '65%',
    },

    form: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 2,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginBottom:10
    },

    logoLoginImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: '1%',
        borderRadius: 50,
        marginBottom: 10


    },

    logoLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 0,
        fontWeight: 'bold'
    },

    formCenterText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        padding: 15,
    },

    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#white',
        marginLeft: 10
    },

    formMailInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formIconMail: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginTop:-10
    },

    formIconPassword: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginTop:-10
    },

    formPasswordInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

});


export default RegisterStyles;
