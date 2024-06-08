import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const AdminCategoryCreateStyles = StyleSheet.create({

    container: {
        flex:1
    },

    image: {
        width:'100%',
        height: 150,
        resizeMode: 'contain'
    },

    imageContainer: {
        paddingTop: 50
    },
    formRedBox:{
        backgroundColor: MyColors.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 5,
        width: '100%',
    },

    form: {
        backgroundColor: 'white',
        height: '65%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: '100%',
        position: 'absolute',
        bottom: 0

    },

    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        marginBottom: 10
    }
});

export default AdminCategoryCreateStyles