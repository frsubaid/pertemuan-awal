import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import cart from '../asset./icon/shopping-cart.png';

const  Position = () => {
  return (
    <View style={styles.Wrapper}>
      <Text>Materi Margin Top</Text>
      <View style={styles.cartWrapper}>
          <Image source={require('../../assets/icon/shopping-cart.png')} style={styles.iconCart} />
          <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.teks}> Keranjang Belanja Anda</Text>
    </View>
  );
};



const styles = StyleSheet.create({
    Wrapper:{padding: 20,alignItems: 'center'},
    cartWrapper:{  borderWidth: 2,borderColor: '#4398d1',width: 93,height: 93, borderRadius: 93/2,justifyContent: 'center',flexDirection: 'row', position: 'relative', marginTop: 30},
    iconCart: {marginTop: 15,width: 50, height: 50},
    teks:{marginTop:8,fontSize: 12,color: '#777777', fontWeight: '700',},
    notif:{fontSize:12,color: 'white', backgroundColor: '#6fc', padding: 5, width: 24, height: 24, borderRadius:25,position: 'absolute', top: 0, right: 0},
});

export default Position;
 