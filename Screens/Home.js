import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';

export const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
    return (
        <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.container}>
          <Image style={styles.image} source={require("../image/logo.png")} />
          <StatusBar style="auto" />
          <TouchableOpacity style={styles.agentBtn} onPress={() => navigation.navigate("LoginA")}>
        <Text style={styles.Text}>AGENT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate("LoginU")}>
        <Text style={styles.Text}>CONDUCTEUR</Text>
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
    width: 330,
    height: 300,
  },

  TextInput: {
    height: 6,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  agentBtn: {
    width: "90%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
  },
 
  userBtn: {
    width: "90%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
  },
  Text: {
    fontSize: 20,
    color: '#073985ff',
  },
});