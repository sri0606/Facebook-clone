import { useState } from 'react';
import { Platform,View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HomeHeader=()=>{
    return (
        <SafeAreaView style={styles.safeArea}>
            <View  style={styles.header}> 
                <Text style={styles.headerTitle}>facebook</Text>
                <View style={styles.buttonsContainer}>
                    <Link href={'/(tabs)/friends'} asChild>
                        <TouchableOpacity style={styles.buttons}>
                            <Ionicons name="search" size={24} color={Colors.light}/>
                        </TouchableOpacity>

                    </Link>
                    <TouchableOpacity style={styles.buttons}>
                            <Ionicons name="add" size={24}color={Colors.light} />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.buttons}>
                        <FontAwesome5 name="facebook-messenger" size={24} color={Colors.light}/>
                    </TouchableOpacity> 
                </View>
          </View>
        </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === 'android' ? 10 : 0,
      },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: Platform.OS === 'android' ? 5 : 15,
    },
    headerTitle:{
        fontSize:24,  
        paddingLeft:15,  
        color:Colors.light,
        fontWeight:"900",
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingRight:15,
    },
    buttons:{
        width: 36,         // Set the width of the button
        height: 36,  
        marginLeft:8,
        backgroundColor:Colors.grey,
        borderRadius:18,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HomeHeader;