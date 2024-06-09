import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useViewModel from './ViewModel'
import { AddressListItem } from './Item';

export const ClientAddressListScreen = () => {

  const {address, getAddress, checked, changeRadioValue} = useViewModel()

  return (
    <View style= {{flex:1, backgroundColor: 'white'}}>
      <FlatList
        data= {address}
        keyExtractor={(item) => item.id!}
        renderItem={({item}) => 
          <AddressListItem 
            address={item} 
            checked={checked}
            changeRadioValue={changeRadioValue}
            /> }
      />
    </View>
  );
};




