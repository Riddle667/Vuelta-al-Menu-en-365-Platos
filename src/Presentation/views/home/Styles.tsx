import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";


const HomeStyles = StyleSheet.create({
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
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

    logoLoginImage: {
        position: 'absolute',
        top: '10%',
        marginBottom: 10,
        marginHorizontal: 110


    },

    logoLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
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
        marginLeft: 20
    },

    formMailInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formIconMail: {
        width: 40,
        height: 40,
        marginLeft: 5
    },

    formIconPassword: {
        width: 40,
        height: 40,
        marginLeft: 5
    },

    formPasswordInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formHelp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

    },
    formHelpText: {
        color: MyColors.primary
    }

});


export default HomeStyles;