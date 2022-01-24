import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';

export const LoginA = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
    const [identifiant, setIdentifiant] = useState("");
    const[motdepasse, setMotdepasse] = useState("");
    const[message, setMessage] = useState();
  const[messageType, setMessageType] = useState();
  const handleLogIn = async () => {
    try{
        const response = await fetch('http://192.168.1.4:3000/agent/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            Cin : identifiant,
            Pass : motdepasse
            })
        })
        if(response.status == 201){
          navigation.navigate("AccueilA", {Cin : identifiant});
        }
        else if(response.status == 400){
            handleMessage("identifiant ou Mot de Passe incorret");
            console.log(message);
        }
    }
    catch(error) {
        console.error(error);
    };
  }
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  }
    return (
      <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.container}>
      
        <Image style={styles.image} source={require("../image/user.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Identifiant"
            placeholderTextColor="#003f5c"
            onChangeText={(identifiant) => setIdentifiant(identifiant)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mot de passe"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(motdepasse) => setMotdepasse(motdepasse)}
          />
        </View>
      <TouchableOpacity>

      </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogIn}>
        <Text style={styles.loginText}>CONNEXION</Text>
      </TouchableOpacity>
      
      </LinearGradient>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    
  image: {
    
    width: 110,
    height: 110,
    marginBottom: 30,
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
  
  
  
});