import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useProductViewModel } from './ProductViewModel';
import { ProductStyles } from './ProductStyles';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';



interface Props extends StackScreenProps<RootStackParamList, 'CreateProductScreen'> {};


  export const CreateProductScreen = observer(() => {
  const productViewModel = useProductViewModel();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleCreateProduct = async () => {
    const success = await productViewModel.createProduct({ name, description, price: parseFloat(price), images });
    if (success) {
      Alert.alert('Éxito', 'Producto creado con éxito', [{ text: 'OK', onPress: () => productViewModel.goBack() }]);
    } else {
      Alert.alert('Error', 'Hubo un problema al crear el producto');
    }
  };

  return (
    <View style={ProductStyles.container}>

      <Image
          source={ require('../../../../assets/chef.jpg') } 
          style= {ProductStyles.imageBackground}
      />

      <View style={ ProductStyles.form }>

        <CustomTextInput
            placeholder='Nombre del producto'
            KeyboardType='default'
            image={ require('../../../../assets/name_product.png') }
            property='name'
            onChangeText={ setName }
            value={ name }
        />

        <CustomTextInput
            placeholder='Descripción del producto'
            KeyboardType='default'
            image={ require('../../../../assets/description.png') }
            property='name'
            onChangeText={ setDescription }
            value={ description }
        />

        <CustomTextInput
            placeholder='Precio del producto'
            KeyboardType='numeric'
            image={ require('../../../../assets/price.png') }
            property='name'
            onChangeText={ setPrice }
            value={ price }
        />
        <ImagePickerComponent images={images} setImages={setImages} />
          <TouchableOpacity style={ProductStyles.button} >
          <RoundedButton text='Crear producto' onPress={handleCreateProduct}/>
        </TouchableOpacity>
      </View>

    </View>
      
      
  );
});

export default CreateProductScreen;