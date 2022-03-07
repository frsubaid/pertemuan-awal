import react, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './src/pages/StylingComponent';
import SampleComponent from './src/pages/SampleComponent';
import FleBox from './src/pages/FlexBox';
import Position from './src/pages/Position';
// import ReactNativeSVG from './src/pages/ReactNativeSVG';

const App =() =>{
  return(
  <View>
   <ScrollView>
      <SampleComponent />
        <FleBox />
        <StylingComponent /> 
        <Position/>
        {/* <ReactNativeSVG /> */}
     </ScrollView>
  </View>
  );
};



export default App;