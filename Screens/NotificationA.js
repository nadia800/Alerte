import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';



export const NotificationA = ({ route, navigation})=> {
    const Cin = route.params.Cin;
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (
        <View style= {styles.mainView}>

            <View style= {styles.navContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate("AccueilA", {Cin})}>
                        <Ionicons style= {styles.iconH} name="home" size={30}  />
                        <Text style= {styles.title}>Notification</Text>
                    </TouchableOpacity>
            </View>

            <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.buttomView}>

                <View style= {styles.container}>
        
                    <View style= {styles.inputContainer1} >
                        <Text style= {styles.textView} >9938TU167  </Text>
                        <Ionicons style= {styles.iconT} name= "checkmark-circle-outline" size= {30} color= "#00FF7F"></Ionicons>
                        
                    </View>
                    <View style= {styles.inputContainer1} >
                        <Text style= {styles.textView} >7535TU198  </Text>
                        <Ionicons style= {styles.iconT} name= "close-circle-outline" size= {30} color= "red"></Ionicons>
                        
                    </View>
                </View>
            </LinearGradient>
            </View>
    )

}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: '100%',
        width: '100%'

    },
    navContainer:{
        width: '100%',
        height: '7%',
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        
        

    },
    iconH: {
        marginRight:'5%',
        marginLeft: '5%',
        color: '#073985ff',
        fontWeight: "bold"
    },
    title: {
       
       marginLeft: '23%',
       fontSize: 20,
       fontWeight: "bold",
       color: '#073985ff',
    }, 


    buttomView:{
        width: '100%',
        height: '93%',
        alignItems: 'center',
        justifyContent:"center"
    },
    container: {
        width: '90%',
        height: "85%",
        alignItems: "center"
    },

    inputContainer1: {
        width: "100%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        marginBottom:10,
        flexDirection: "row",
        alignItems: "center"
    },

    textView: {
        marginLeft:5,
        flex: 2,
    },
    iconT: {
        marginRight: 5,
       
        
    },
   
})