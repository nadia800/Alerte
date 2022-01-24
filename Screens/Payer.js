import { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';

export const Payer = ({ route, navigation })=> {
  const Matricule = route.params.Matricule;
  const [NumeroCarte, setNumero] = useState();
  const [CodeCarte, setCode] = useState();
  const [DateValidation, setDate] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const PayerFacture = async() => {
    try{
      const response = await fetch('http://192.168.1.4:3000/carte/payer', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          NumeroCarte: NumeroCarte,
          CodeCarte: CodeCarte,
          DateValidation : DateValidation
          })
      })
      const res = await response.json();
      if(response.status == 201){
        Alert.alert("Payement valider !")
      }
    }
    catch(error) {
      console.error(error);
    };
  }
   return (
        <View style= {styles.mainView}>

            <View style= {styles.navContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate("NotificationU", Matricule )}>
                    <Ionicons style= {styles.iconH} name="arrow-back" size={33}  />
                  </TouchableOpacity>
                    <Text style= {styles.title}>Payer</Text>
                
            </View>

            <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.buttomView}>
            <View style= {styles.container}>
            <Image style={styles.image} source={require("../image/cartet1.png")} />
            <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Numéro de la carte"
            placeholderTextColor="#003f5c"
            onChangeText={(numero) => setNumero(numero)}
           />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Code de la carte"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(code) => setCode(code)}           
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Date de validation"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(date) => setDate(date)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={PayerFacture}>
        <Text style={styles.loginText}>PAYER</Text>
      </TouchableOpacity>
            </View>  
            </LinearGradient>
        </View> 
        
        
    )}


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
    image: {
        width: 170,
        height: 110,
        marginTop: 30,
        marginBottom: 60,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
    
    },

    inputView: {
        backgroundColor: "white",
        width: "90%",
        height: 30,
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center'
      },
     
      TextInput: {
        height: 6,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      loginBtn: {
        width: 200,
        height: 35,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#B0E0E6",
      },
      
      

    

        })