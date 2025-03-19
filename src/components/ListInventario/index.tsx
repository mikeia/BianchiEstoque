import React from 'react';
import { Text, View,TextInput, Keyboard } from "react-native";
import { styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';

export function ListInventario() {

    const list = [
        {
            name: '000125',
            local: '101B50',
            qtde: 2
        },
        {
            name: '801112',
            local: '109C30',
            qtde: 3
        },
        {
            name: '252426',
            local: '101B10',
            qtde: 4
        },
        {
            name: '987654',
            local: '102A12',
            qtde: 5
        },
        {
            name: '123456',
            local: '103B15',
            qtde: 1
        },
        {
            name: '252426',
            local: '101B10',
            qtde: 4
        },
        {
            name: '987654',
            local: '102A12',
            qtde: 5
        },
        {
            name: '123456',
            local: '103B15',
            qtde: 1
        },
        {
            name: '252426',
            local: '101B10',
            qtde: 4
        },
        {
            name: '987654',
            local: '102A12',
            qtde: 5
        },
        {
            name: '123456',
            local: '103B15',
            qtde: 1
        },
        {
            name: '252426',
            local: '101B10',
            qtde: 4
        },
        {
            name: '987654',
            local: '102A12',
            qtde: 5
        },
        {
            name: '123456',
            local: '103B15',
            qtde: 1
        },
    ];

    return (
        <>
        <View style={styles.Container}>
            <ScrollView style={{padding:0,margin:0, backgroundColor:'#c1c1c1'}}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
                <View key={index} style={styles.ItemContainer}>
                    <Text style={styles.Text}>{item.name}</Text>
                    <Text style={styles.Text}>{item.local}</Text>
                    <Text style={styles.Text}>{item.qtde}</Text>
                </View>
                
            ))}
            </ScrollView>
        </View>
        <View style={styles.inputsHeader}>
            <View style={styles.inputsHeaderQtde}>
              <Text style={{color:'white'}}>Quant.</Text>
              <TextInput style={styles.qtdItem } keyboardType = 'numeric' placeholder='1'/>
            </View>
            <View style={styles.inputsHeaderItem}>
              <Text style={{color:'white'}} > Item </Text>
              <TextInput style={styles.codItem} keyboardType = 'numeric' placeholder='011285'/>
            </View>
            
          </View>
        <View style={styles.ContainerSecondary}>
            <ScrollView >
                {list.map((item, index) => (
                    <View key={index} style={styles.ItemContainerSecondary}>
                        <Text style={styles.Text}></Text>
                        <Text style={styles.Text}></Text>
                        <Text style={styles.Text}></Text>
                    </View>
                ))}
            </ScrollView>
        </View>
        </>
    );
}
