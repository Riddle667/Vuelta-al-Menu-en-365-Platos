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
  },
  categoryContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#F3F3F3',
    display: 'flex',
    flexDirection: 'row',
  },
  // categoryImage: {
  //   width: 40,
  //   height: 40,
  // }
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    zIndex: 1,
    backgroundColor: 'red',
  }
});
