import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: '100%',
    padding: 20,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
  },
  categoryListContainer: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
  categoryContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#E1E1E1',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    zIndex: 1,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  categoryContainerText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoryOptionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-around',
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  categoryContainerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
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
    width: '80%',
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
    backgroundColor: '#DE786B',
  },
  modalBackButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#DE786B',
    borderWidth: 1,
  }
});
