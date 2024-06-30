import { StyleSheet } from "react-native";

const Loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageBackground: {
        bottom: 30,
        width: '100%',
        height: '70%',
        opacity: 0.4,
    },
    form: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
        display: 'flex',
    },
    formTextInput: {
        fontStyle: 'italic',
        paddingLeft: 10,
        flex: 1,
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#FF4141',
        borderWidth: 1,
        borderRadius: 50,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    formLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    formRegisterText: {
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        color: 'orange',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 10
    },
    formIcon: {
        width: 30,
        height: 30,
    },
    logoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '15%'
    },
    logo: {
        width: 200,
        height: 200
    },
    logoText: {
        paddingTop: 10,
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    errorText: {
        backgroundColor: '#ff7f7f',
        borderLeftWidth: 3,
        borderColor: '#993235',
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    errorsContainer: {
        backgroundColor: '#ff7f7f',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    loginErrorMessage: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        paddingLeft: 50
    }
});

export default Loginstyles;