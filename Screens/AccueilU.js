import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';



export const AccueilU = ({ route, navigation }) => {
    const Matricule = route.params.Matricule;
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.mainView}>
            <View style= {styles.topView}>
            <Text style={styles.text}> Bienvenue à Alerte Fourrière </Text>
            <Image style={styles.image} source={require("../image/car.png")} />
            
            </View>    
            <View style= {styles.bottomView}>
              

                <View style= {styles.iconsViewG}>
                    <View style= {styles.iconViewL}>
                        <View style= {styles.iconContainer}  >
                            <TouchableOpacity onPress={() => navigation.navigate("ProfileU", {Matricule})}>
                                <Ionicons style= {styles.icon} name= "person-sharp" size= {50} ></Ionicons>
                                <Text style= {styles.textIcon}>Profil</Text>
                            </TouchableOpacity>
                        </View>
                        <View style= {styles.iconContainer}>
                            <TouchableOpacity onPress={()=> navigation.navigate("NotificationU", {Matricule})}>
                                <Ionicons style= {styles.icon} name= "notifications-sharp" size= {50} ></Ionicons>
                                <Text style= {styles.textIcon}>Notification</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style= {styles.iconViewL}>
                        <View style= {styles.iconContainer}>
                            <TouchableOpacity onPress={()=> navigation.navigate("Aider", {Matricule})}>
                                <Ionicons style= {styles.icon} name= "help-sharp" size= {50} ></Ionicons>
                                <Text style= {styles.textIcon}>Aider</Text>
                            </TouchableOpacity>
                        </View>
                        <View style= {styles.iconContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                <Ionicons style= {styles.icon} name= "exit-sharp" size= {50} ></Ionicons>
                                <Text style= {styles.textIcon}>Exit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </View>
                
                
            </View>

        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        width: '100%'

    },
    topView: {
        width:'100%',
        height: '50%',
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        alignItems: "center",
        marginTop: 50,
        width: 250,
        height: 110,
        
    },
    bottomView: {
        width:'100%',
        height: '50%',
        flexDirection: "column",
        alignItems: "center",
        


    },
    text: {
        height: '10%',
        marginTop: 20,
        fontSize: 20,
        color: "white",
        


    },
   
    iconsViewG: {
        height: '70%',
        

    },
    iconViewL: {
        flexDirection:"row",
        

    },
    icon: {
    
        color: '#4682B4'
    },
    iconContainer: {
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "white",
        width: 120,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
    },
   textIcon: {
       
       


   },
   
   

  });

