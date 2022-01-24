import { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';
import { Table, Row} from 'react-native-table-component';

export const NotificationU = ({ route, navigation}) => {
    const Matricule = route.params.Matricule;
    const elements = [];
    const [ele, setEle] = useState([]);

    const  handleNotification = async () => {
        try{
            const response = await fetch('http://192.168.1.4:3000/notification/recherche', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                Matricule: Matricule
                })
            })
            const res = await response.json();
            if(response.status == 201){
                for(var i=0 ; i< res.Notification.length; i++){
                  elements.push(
                    <View>
                        <View style= {styles.inputContainer1}>
                        <Text style={styles.inputText}>
                            Votre véhicule ayant le numéro d'immatriculation {res.Notification[i].Matricule} 
                            a été enlevée par la fourrière {res.Notification[i].NomAgent}  pour plus d'information 
                            cliquer ci-dessous.
                        </Text>
                        <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate("Payer", {Matricule})}>
                            <Text style={styles.payText}>PAYER</Text>
                        </TouchableOpacity>
                        <Button
                            title="Plus d'information"
                            onPress={() => Alert.alert("Adresse","Fourrière municipale de `${res.Notification[i].AdresseAgent}`. Téléphone : 22354325",[
                            {text: "Ok"},
                            ])}/>
                        </View>
                    </View>                   
                  )
                }
                setEle([...elements])
            }
        }
        catch(error) {
            console.error(error);
        };
      }
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        handleNotification();
    }, [navigation]);
    return (
        
        <View style= {styles.mainView}>
        
            <View style= {styles.navContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("AccueilU", {Matricule})}>
                    <Ionicons style= {styles.iconH} name="home" size={30}  />
                </TouchableOpacity>
                <Text style= {styles.title}>Notification</Text>
            </View>
            <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.buttomView}>
            <View style= {styles.container}>
                {ele}
             </View>
             </LinearGradient>
            
        </View>
        
            
    )}

    const styles = StyleSheet.create ({

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
            justifyContent: "center"
    
        },
        container: {
            width: '90%',
            height: "90%",
            alignItems: "center"
        },
        inputContainer1: {
            width: "100%",
            height: 180,
            backgroundColor: "white",
            borderRadius: 20,
            justifyContent: "center",
            shadowColor: 'black',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.6,
            shadowRadius: 2,
            elevation: 2,
            marginBottom:10,
            alignItems: "center",
        },
        inputText: {
            paddingLeft: 5,
            fontWeight: "bold",
            marginBottom: 10,
            paddingLeft: 15,
    
        },
        payBtn: {
            width: "50%",
            borderRadius: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            backgroundColor: "#FFA07A",
          },

})