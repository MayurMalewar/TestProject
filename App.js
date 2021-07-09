/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


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

// const App = () => {
//   let data = [];
//   data = step.POWER.task[0].optFieldDetails;
//   const [date, setDate] = useState(moment().toDate());
//   const [show, setShow] = useState(false);
//   const [stepValue, setStepValue] = useState(data);
//   const [pickItem, setPickItem] = useState({ item: null, index: null, forcast: null });


//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(false);
//     setDate(currentDate);
//     let { item, index, forcast } = pickItem;
//     let fdata = '';
//     try{
//       try{
//       if (forcast) {
//         fdata = JSON.parse(item.actualAndForecast[forcast].fieldValue)
        
  
//       } else {
//         actualAndForecast[forcast].fieldValue
  
//       }
//     }
//       catch(error){
//         actualAndForecast[forcast].fieldValue
//       }
//     }
//     catch(error){
//       console.log('error::',error)
      
//     }
   


//     if (fdata && fdata.forecastDate) {
//       fdata.forecastDate = moment(currentDate).format('L');
//       item.actualAndForecast[forcast].fieldValue = JSON.stringify(fdata);
//     } else {
//       fdata = moment(currentDate).format('L');
//       item.actualAndForecast[forcast].fieldValue = fdata;
//     }
//     let copystepValue = [...stepValue];
//     copystepValue[index] = item;
//     setStepValue(copystepValue);
//     const OnChangeFieldApi ={
//       siteProjectsId: "16377473",
//       optFieldDetails: [
//         {
//           fieldName: item.fieldName,
//           fieldValue: fdata
          
//         }
//       ]
//     }
//     ApiCall(OnChangeFieldApi);
  

//   };

//   const showDatepicker = (item, index, forcast) => {
//     setPickItem({ item, index, forcast });
//     setShow(true)
//   };
// const ApiCall = (values) =>{
//   console.log("API values",values)
// }
  
//   const clearData =(item)=>{

// try {
//   let fValue=item.actualAndForecast[1].fieldValue;

//   try {
//     if(fValue){
//       let parsedDagta=JSON.parse(fValue);
//     let value=  parsedDagta.forecastDate?parsedDagta.forecastDate:fValue===null?'':fValue;
//     return value;
    
      
//     }
//   } catch (error) {
    
//     return fValue
//   }


//   return '';
// } catch (error) {
// console.log('error1: ',error);
// return '';
// }

//   }
//   const onChangeenumValues=(val)=>{
//     const selectedData={
//       siteProjectsId: "16377473",
//       optFieldDetails: [
//        val
//       ]
//     }
//     getSelectedOptionApi(selectedData);
    
//  }
//    const getSelectedOptionApi=(selectedData)=>{
//      console.log('Selected option API', selectedData)
//    }
//   return (
//     <SafeAreaView style={{ padding: 10, flex: 1 }}>
//       {stepValue ? stepValue.map((item, index) =>
//         <View style={{ flexDirection: "row", borderWidth: 1, height: '8%' }}>
//           <View style={{ flex: 2.8, borderRightWidth: 1, justifyContent: "center", backgroundColor: '#e6e6e6' }}>
//             <Text style={{ paddingHorizontal: '5%', fontSize: 20 }}>{item.title}</Text>
//           </View>
//           {item.subType == 'multiSelect' ?
//             <View style={{ flexDirection: "row", flex: 2, backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff' : '#e6e6e6' }}>
//               <Picker style={{ flex: 1 }}
//                 onValueChange={(val) => onChangeenumValues(val)}
//                 enabled={item.isVisibleToVendor == 'EDIT' ? true : false}
//               >
//                 {item.enumValues ? item.enumValues.map((data, index) => {
//                   return <Picker.Item label={data} value={{fieldName:item.fieldName, fieldValue:data}} key={index} />
//                 }) : null
//                 }
//               </Picker>
//             </View>
//             : item.subType == 'Actual & Forecast' ?
//               <View style={{ flexDirection: "row", flex: 2 }}>
//                 <TouchableOpacity onPress={() => { item.isVisibleToVendor == 'EDIT' ? showDatepicker(item, index, 1) : null }} style={{ flex: 1, borderRighttWidth: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff' : '#e6e6e6' }}>
//                   <Text style={{ flex: 0.2, fontSize: 20, fontWeight: "bold", paddingLeft: 2 }}>F</Text>
//                   {/* <Text style={{ flex: 0.8 }}>{item.actualAndForecast ? item.actualAndForecast[1].fieldValue && typeof item.actualAndForecast[1].fieldValue === 'string' ? JSON.parse(item.actualAndForecast[1].fieldValue).forecastDate? JSON.parse(item.actualAndForecast[1].fieldValue).forecastDate: item.actualAndForecast[1].fieldValue  : null:null }</Text> */}
//                   <Text style={{ flex: 0.8 }}>{clearData(item)}</Text>
               
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => { item.isVisibleToVendor == 'EDIT' ? showDatepicker(item, index, 0) : null }} style={{ flex: 1, borderLeftWidth: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: item.isVisibleToVendor == 'EDIT' ? '#ffffff' : '#e6e6e6' }}>
//                   <Text style={{ flex: 0.2, fontSize: 20, fontWeight: "bold", paddingLeft: 2 }}>A</Text>
//                   <Text style={{ flex: 0.8 }}>{item.actualAndForecast ? item.actualAndForecast[0] ? item.actualAndForecast[0].fieldValue : null : null}</Text>
//                 </TouchableOpacity>
//               </View> : null
//           }
//         </View>

//       ) : null
//       }
//       {show &&
//         <DateTimePicker
//           value={date}

//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//           on
//         />}
//     </SafeAreaView>
//   )
// };

// export default App;

const App = () =>{
  <View>
    <Text>hello world</Text>
  </View>
}
export default App;
