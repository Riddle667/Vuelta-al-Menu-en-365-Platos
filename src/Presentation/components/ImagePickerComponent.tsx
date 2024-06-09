import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RoundedButton } from '../components/RoundedButton';


interface ImagePickerComponentProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({ images, setImages }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} >
      <RoundedButton text='Elegir de la galeria' onPress={pickImage}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} >
        <RoundedButton text='Tomar foto' onPress={pickImage}/>
      </TouchableOpacity>

      {images.map((uri: string, index: number) => (
        <Image key={index} source={{ uri }} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ImagePickerComponent;