import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';


class FlexBox extends Component {
    render () {
        return ( 
            <View style={{marginTop: 50}}>
        {/* <View style={{flexDirection: 'row',  */}
       <View>
             <View style={{flexDirection: 'row',}}>
             <Image source={{uri:'https://i.ytimg.com/vi/bd1lgcl8vvw/hqdefault.jpg', width: 80, height: 80 }} style={{borderRadius: 60}}/>
           <View>
               <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft: 10, marginTop: 10}}>Jokowi Dodo</Text>
             <Text style={{fontSize: 15, marginLeft: 10}}>50 Jt Subcriber</Text>
           </View>

         </View>
         </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            <Text>Beranda</Text>
            <Text>Video</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Tentang</Text>
            <Text>Chanel</Text>
        </View>
         
        
         
         
           </View>
         // backgroundColor: '#2D31FA',
        // alignItems: 'center',
        // justifyContent: 'space-between'}}>
        //     <View style={{backgroundColor: '#F1D00A', width: 50, height: 50}}/>
        //     <View style={{backgroundColor: '#F7ECDE', width: 50, height: 50}}/>
        //     <View style={{backgroundColor: '#A1B57D', width: 50, height: 50}}/>
        //     <View style={{backgroundColor: '#FA4EAB', width: 50, height: 50}}/> 
        //  </View>
    
        );   
    }
}


export default FlexBox;