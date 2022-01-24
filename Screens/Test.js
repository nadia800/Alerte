import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, 
} from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const Test = () => {


    return ( 

        <View style= {styles.mainView} >
             <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.topView}>
             <View style= {styles.navContainer}>
                    <Ionicons style= {styles.iconH} name="home" size={30}  />
                    <Text style= {styles.title}>Profil</Text>
                </View>

                <View style= {styles.profileView}>
                    <Image style={styles.image} source={require("../image/user.png")} />    
                    
                    <Text style= {styles.username}>Takwa Sakouhi</Text>
                </View>
             </LinearGradient>
             <View style= {styles.buttomView}>

             <View style= {styles.infoView}>
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>CIN</Text>
                    <View style= {styles.rowInput}>
                        <Text style= {styles.textInput}>05789113</Text>
                    </View>
                </View>
                <View style= {styles.br}></View> 
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>Numéro de téléphone</Text>
                    <View style= {styles.rowInput}>
                        <Text style= {styles.textInput}>22924687</Text>
                    </View>
                </View>
                <View style= {styles.br}></View> 
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>Municipalité </Text>
                    <View style= {styles.rowInput}>
                        <Text style= {styles.textInput}>Ben Arous</Text>
                    </View>
                </View>
                <View style= {styles.br}></View> 

                <View style= {styles.buttonView}>
                <TouchableOpacity style= {styles.buttonPass}>
                    <Text style= {styles.textButtonPass}>MODIFIER MOT DE PASSE</Text>
                </TouchableOpacity>
            </View>
            </View>
                
                
             </View>

            
         </View>
    )

}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: '100%',
        width: '100%',
        
       

    },

    topView: {
        height: '40%',
        width: '100%',
       

    },
    navContainer:{
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        
    },
    iconH: {
        marginRight:'5%',
        marginLeft: '5%',
        color: '#073985ff',
        fontStyle: "bold",
        color : "white",
        
    },
    title: {
       
       marginLeft: '23%',
       fontSize: 20,
       fontWeight: "bold",
       color: 'white',
    }, 

    profileView: {
        alignItems : "center",
        paddingTop: 10,

    },

   image : {
    width: 110,
    height: 110,
    marginTop: 10,
    marginBottom: 5,
    
   },
   username: {
    fontSize: 20,
    fontWeight: "bold",
    
   },

   buttomView : {
       width :"100%",
       height: "60%",
       alignItems: "center",
   },
   infoView: {
       width: "90%",
       height: "90%",
       paddingTop: 10,


   },
   input: {
    marginBottom: 10,
    marginTop: 15,
   },
   titleInput: {
    marginBottom: 7,
    color: "#C0C0C0",
    fontSize: 16,
   },
   rowInput : {
        flexDirection: "row",
        
    
   },
   textInput: {
    flex: 2,
    color: "black",
    fontSize: 15,
    fontSize: 18,
    fontWeight: "bold",
   },
   buttonInput: {
    color: "lightblue",
    fontSize: 15,
    fontWeight: "bold"

    
   },
   br: {
    width: "100%",
    height: "1%",
    backgroundColor: "#C0C0C0"
   },
   
   buttonView: {
    alignItems: "center",
},
buttonPass: {
    width: "80%",
    height: 40,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "lightblue"
},
textButtonPass: {
    fontSize: 15,
}
    
    
})