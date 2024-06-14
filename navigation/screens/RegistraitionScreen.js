import * as React from "react";
import {View, Text, Alert} from 'react-native';

export default function RegistraitionScreen({navigation}){
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={()=>navigation.navigate('Home')}
            style={{fontSize:26, fontWeight: "bold"}}>RegScreen</Text>
        </View>
    );
}