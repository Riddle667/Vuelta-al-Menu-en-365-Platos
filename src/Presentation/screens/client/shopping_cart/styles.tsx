import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  product: {
    width: 110,
    height: 110,
    backgroundColor: '#D1D1D1',
    borderRadius: 5,
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    borderRadius: 10,
    width: 310,
    height: 170,
    margin: 10,
  },
  productSection: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 100,
    paddingLeft: 50,
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
  goBackIcon: {
    marginBottom: 20,
  },
  modal: {
    position: "absolute",
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    elevation: 5,
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  modalAcceptButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ff432a',
  },
  modalBackButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#ff432a',
    borderWidth: 1,
  },
  payButton: {
    backgroundColor: '#00A151',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    width: 200,
    marginLeft: 70,
    marginTop: 40,
  },
  payText: {
    color: 'white',
    textAlign: 'center',
  }
});