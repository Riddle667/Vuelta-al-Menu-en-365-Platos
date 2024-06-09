import { View, Text, TouchableOpacity, Image, TextInput, LayoutAnimation } from 'react-native' 
import { styles } from './Styles';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';

  const imagesData = [
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
  ]

export const VisualizeProductDetailScreen = ({ navigation, active, setActive, data, expanded, addProduct}) => {
  
  const [amount, setAmount] = useState(1)
  

  console.log('VisualizeProductDetailScreen')

  const amountHandler = (action) => {
    if (amount + action > 0) {
      setAmount((value) => value + action)
    }
  }

  const handleAdd = () => { 
    addProduct(data, amount)
    handleClose()
  }

  const handleClose = () => {
    setActive(false)
    setAmount(1)
  }

  return (
    <View style={active ? styles.modal : styles.modalInactive}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleClose}
      >
        <Text style={styles.closeModalButton}> X </Text>
      </TouchableOpacity> 
      <Text style={styles.productName}>{data.name}</Text>
      <View style={ styles.imageContainer}>
        {
          imagesData.map((image, index) => {
            console.log("Cargando imagenes")
            return (
              <Image
                key={index}
                style={styles.image}
                source={{ uri: image }}
              />
            )
          })
        }
      </View>
      <Text style={styles.productTitle}>Descripción</Text>
      <View style={styles.separator}></View>

      <Text style={styles.ProductData}>{data.description}</Text>
      <Text style={styles.productTitle}>Valor:</Text>
      <View style={styles.separator}></View>

      <Text style={styles.ProductData}>{data.price} CLP</Text>
      
      <View style={styles.amountContainer}>
        <Text style={{fontWeight: "bold"}}>Cantidad: </Text>
        <TouchableOpacity
          style={styles.amountArrow}
          onPress={() => amountHandler(-1)}
        >
          <Text style={styles.amountArrowTest}>{"<"}</Text>
        </TouchableOpacity>
        <Text>{amount}</Text>
        <TouchableOpacity
          style={styles.amountArrow}
          onPress={() => amountHandler(1)}
        >
          <Text style={styles.amountArrowTest}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={handleAdd}
      >
        <Text style={{color: "white", textAlign: "center"}}>Añadir</Text>
      </TouchableOpacity>
    </View>
  )
}