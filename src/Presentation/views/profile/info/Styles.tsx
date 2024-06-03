import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const ProfileInfoStyles = StyleSheet.create({
    container:{
        flex: 1
    },

    ImageBackground: {
        width: '100%',
        height: '65%',
    },

    logoLoginImage: {
        position: 'absolute',
        top: '10%',
        marginBottom: 10,
        marginHorizontal: 110


    },

    logoImage:{
        width: 200,
        height:200,
        borderRadius: 100,
        top: '4%',
        borderColor: MyColors.primary,
        borderWidth:2
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

    form: {
        width: '100%',
        height: '45%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    formImage: {
        height: 40,
        width:40,
        marginTop: 30,
        marginLeft: 15,
    },

    formInfoUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    formContent: {
        marginLeft: 15,
        marginTop: 30,
    },

    formTextDescription:{
        fontSize: 15,
        color: 'black'
    },

    formRedBox:{
        backgroundColor: MyColors.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '100%',
    },

    formTextColor:{
        color: 'white',
    },


    logout:{
        position: 'absolute',
        top: 10,
        right:10,
        height: 40,
        width: 40,
    }
})

export default ProfileInfoStyles