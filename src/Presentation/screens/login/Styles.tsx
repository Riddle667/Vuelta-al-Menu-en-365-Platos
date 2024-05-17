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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 30,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 30,
        textDecorationLine: 'underline'
    },
    formInput: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        marginHorizontal: 20,
        borderRadius: 30, // borde redondeado
        backgroundColor: '#FF4141', //  color de fondo
        color: 'white'
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
        marginTop: 10,
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
    logoText: {   //titulo
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 40
    },
    errorText: {
        backgroundColor: '#FFA500',
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
    }
});

export default Loginstyles;
