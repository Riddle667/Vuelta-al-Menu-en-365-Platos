import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  product: {
    width: 180,
    height: 180,
    backgroundColor: '#D1D1D1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
    productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 5,  
    padding: 10,
    borderRadius: 10,
    width: '80%',
    height: 200,
  },
  productSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  productTextContainer: {
    textAlign: "center",
    textAlignVertical: "center",
    height: 60,
    marginLeft: 10,
  },
  productTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productText: {

  },
  cartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: "#F14100",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10
  },
});