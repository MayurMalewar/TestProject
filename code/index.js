/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { json } from 'express';
import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  TouchableOpacity,
  Picker

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import step from './json/step.json';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const App = () => {
  let data = [];
  data = step.POWER.task[0].optFieldDetails;
  const [date, setDate] = useState(moment().toDate());
  // const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [stepValue, setStepValue] = useState(data);
  const [pickItem, setPickItem] = useState({ item: null, index: null, forcast: null });


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let { item, index, forcast } = pickItem;
   let fdata ='';
    console.log('item.actualAndForecast[forcast].fieldValue: ',item.actualAndForecast[forcast].fieldValue);
    if(forcast){
      fdata = JSON.parse(item.actualAndForecast[forcast].fieldValue)

    }else{
      fdata = item.actualAndForecast[forcast].fieldValue

    }
   
    if (fdata && fdata.forecastDate) {
      fdata.forecastDate = moment(currentDate).format('L');
      item.actualAndForecast[forcast].fieldValue = JSON.stringify(fdata);
    } else {
      console.log('else');
      fdata = moment(currentDate).format('L');
      item.actualAndForecast[forcast].fieldValue = fdata;
    }
    let copystepValue=[...stepValue];
    copystepValue[index] = item;
    setStepValue(copystepValue);
    console.log('copystepValue:', copystepValue, "item", item);
  };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  const showDatepicker = (item, index, forcast) => {
    console.log("values:", stepValue, "=>", item, '=>', index);
    setPickItem({ item, index, forcast });
    setShow(true)
  };
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }}>
      {stepValue ? stepValue.map((item, index) =>
        <View style={{ flexDirection: "row", borderWidth: 1,height:'8%'}}>
          <View style={{ flex: 2.8, borderRightWidth:1,justifyContent:"center", backgroundColor:'#e6e6e6'}}>
            <Text style={{paddingHorizontal:'5%', fontSize:20}}>{item.title}</Text>
          </View>
          { item.subType == 'multiSelect' ?
            <View style={{ flexDirection: "row", flex: 2,backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff': '#e6e6e6' }}>
            <Picker style={{flex:1}}
            onValueChange={()=>{}}
            enabled={item.isVisibleToVendor =='EDIT' ? true : false}
             >
            { item.enumValues ? item.enumValues.map((item, index)=>{
             return <Picker.Item label={item} value={index} key={index}/>
            }):null
              }
            </Picker>
          </View>
          : item.subType == 'Actual & Forecast' ?
          <View style={{ flexDirection: "row", flex: 2 }}>
            <TouchableOpacity onPress={() =>{item.isVisibleToVendor == 'EDIT' ? showDatepicker(item, index, 1): null}} style={{ flex: 1, borderRighttWidth: 1, alignItems: "center", justifyContent:"center", flexDirection:"row",backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff': '#e6e6e6' }}>
              <Text style={{flex:0.2,fontSize:20, fontWeight:"bold",paddingLeft:2}}>F</Text>
              <Text style={{flex:0.8}}>{item.actualAndForecast ? item.actualAndForecast[1] ? JSON.parse(item.actualAndForecast[1].fieldValue) ? JSON.parse(item.actualAndForecast[1].fieldValue).forecastDate : null : null : null}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {item.isVisibleToVendor == 'EDIT' ? showDatepicker(item, index, 0):null}} style={{ flex: 1, borderLeftWidth: 1, alignItems: "center",justifyContent:"center", flexDirection:"row",backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff': '#e6e6e6' }}>
            <Text style={{flex:0.2,fontSize:20, fontWeight:"bold",paddingLeft:2}}>A</Text>
              <Text style={{flex:0.8}}>{item.actualAndForecast ? item.actualAndForecast[0] ? item.actualAndForecast[0].fieldValue : null : null}</Text>              
            </TouchableOpacity>
          </View>: null
          }
        </View>

      ) : null
      }
      {show &&
        <DateTimePicker
          value={date}
         
          is24Hour={true}
          display="default"
          onChange={onChange}
          on
        />}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
