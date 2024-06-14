import * as React from "react";
import {View, Text, Alert} from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={()=>alert('This is homescreen')}
            style={{fontSize:26, fontWeight: "bold"}}>HomeScreen</Text>
        </View>
    );
}