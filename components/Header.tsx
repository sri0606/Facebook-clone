import { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header(){

    return (
        <SafeAreaView style={styles.header}>
            <Text>facebook</Text>
            <View>
                <TouchableOpacity>
                    <Ionicons name='search' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})