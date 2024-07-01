import { StyleSheet } from 'react-native';
import { ProductListScreen } from '../product_list/ProductListScreenClient';

export const styles = StyleSheet.create({
  modal: {
    width: 370,
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "white",
    transform: [{ translateX: -185 }, { translateY: -300 }],
    shadowColor: "black",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    paddingBottom: 20,
  },
  modalInactive: {
    display: 'none',
  },
  closeModalButton: {
    width: 25,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: '#D1D1D1',
    borderRadius: 50,
    left: 325,
    color: "white",
    textAlignVertical: "center",
  },
  button: {
    backgroundColor: 'white',
  },
    image: {
    width: 70,
    height: 70,
    zIndex: 10,
    borderWidth: 2,
    backgroundColor: "red",
    margin: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  productName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  productTitle: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  ProductData: {
    fontSize: 15,
    marginLeft: 10,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: "#D1D1D1",
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 100,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  amountArrow: {
    backgroundColor: "#D1D1D1",
    padding: 5,
    borderRadius: 10,
    margin: 5,
    height: 25,
    width: 25,
  },
  amountArrowTest: {
    position: "absolute",
    top: 2,
    left: 8
  }
});