import react, { Component } from 'react';
import {Text,View,Image,StyleSheet, ScrollView} from 'react-native';
import macbook from '../../assets/Image/maacbook.jpg';

const StylingComponent= () => {
  return(
    <View>
      <Text style={styles.text}>styling Component</Text>
      <View style={{width: 100,height: 100,backgroundColor: '#9b59b6',borderWidth: 2,borderColor: '#f1c40f',marginTop: 110,marginLeft: 100,marginBottom:  80}}
      />
      <View style={{padding: 12,backgroundColor: '#F2F2F2',width: 212,borderRadius: 8}}>
      <Image source={require('../../assets/Image/maacbook.jpg')} style={{width: 188,height: 107,borderRadius: 8}} />
      <Text style={{fontSize: 14,fontWeight: 'bold',marginTop: 16}}>New Macbook Pro 2019</Text>
      <Text style={{fontSize: 12,color: '#F2994A',fontWeight: 'bold',marginTop: 8}}>Rp.25.000.000.-</Text>
      <Text style={{fontSize: 12,fontWeight: '300',marginTop: 12}}>Jakarta selatan</Text>
      <View style={{backgroundColor: '#2ecc71',borderRadius: 12,marginTop: 20}}>
      <Text style={{fontWeight: 'bold',textAlign: 'center'}}>Beli</Text>
      </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: 'bold',
    color: '#e67e22',
    marginLeft: 120,
    
  }
})



export default StylingComponent;