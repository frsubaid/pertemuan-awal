import react, {Component} from "react";
import { TextInput,View,Text,Image } from "react-native";

const SampleComponent= () => {
  return(
  <View>
    <View style={{width: 600, height: 50, backgroundColor: '#8e44ad'}}/>
    <TextInput style={{borderWidth: 1}}/>
    <Text style={{ color: '#f1c40f'}}>Oyy Kiyomasa</Text>
    <Text>Nande nande</Text>    
    <Photo/>
    <BoxGreen />
    <Profile />
  </View> 
  );
};

const Photo =() =>{
  return (
    <View>
      <Image source={{uri: 'https://placeimg.com/100/100/tech'}}        
    style={{width: 100, height: 100}}
    />
    <Text>Ini adalah orang turu</Text>
    </View>
    
  );
};

class BoxGreen extends Component{
  render(){
    return <Text>ini class Komponen</Text>
  }
}

class Profile extends Component{
  render(){
    return( <View>
       <Image source= {{uri: 'https://placeimg.com/180/180/animals'}} style={{width: 180, height: 180,borderRadius: 50}}
    />
    <Text style={{color: '#e67e22',fontSize: 30}}>Ini adalah hewan</Text>
    </View>
      );
  }

}

export default SampleComponent;