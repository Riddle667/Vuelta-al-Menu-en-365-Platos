import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const ProfileUpdateStyles = StyleSheet.create({
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
        marginBottom: 10,


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

    loading: {
        
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
    },

    logoImage:{
        width: 200,
        height:200,
        borderRadius: 100,
        top: '4%',
        borderColor: MyColors.primary,
        borderWidth:2
    },

});


export default ProfileUpdateStyles;
