import React, { useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { modifierNom, modifierPrenom, modifierMatricule, modifierCin } from '../Fonction/Modifier';

export const ProfileU = ({ route, navigation }) => {
    const Matricule = route.params.Matricule;
    const [MatriculeM, setMatriculeMo] = useState(Matricule);
    const[Nom , setNom] = useState();
    const[Prenom , setPrenom] = useState();
    const[Cin , setCin] = useState();
    const handleProfile = async() => {
        try{
            const response = await fetch('http://192.168.1.4:3000/conducteur/profile', {
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
                setNom(res.Nom);
                setPrenom(res.Prenom);
                setCin(res.Cin);
            }
        }
        catch(error) {
            console.error(error);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        handleProfile();
    }, [navigation]);

    return ( 

        <View style= {styles.mainView} >
             <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.topView}>
             <View style= {styles.navContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("AccueilU", {Matricule : MatriculeM})}>
                        <Ionicons style= {styles.iconH} name="home" size={30}  />
                    </TouchableOpacity>
                    <Text style= {styles.title}>Profil</Text>
                </View>

                <View style= {styles.profileView}>
                    <Image style={styles.image} source={require("../image/user.png")} />    
                    
                    <Text style= {styles.username}>{Nom} {Prenom}</Text>
                </View>
             </LinearGradient>
             <View style= {styles.buttomView}>

             <View style= {styles.infoView}>
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>Nom</Text>
                    <View style= {styles.rowInput}>
                        <TextInput style= {styles.textInput} onChangeText={(nom) => setNom(nom)}>{Nom}</TextInput>
                        <TouchableOpacity style= {styles.button} onPress={() =>modifierNom(Nom, Matricule)}> 
                            <Text style= {styles.buttonInput}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style= {styles.br}></View> 
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>Prénom</Text>
                    <View style= {styles.rowInput}>
                        <TextInput style= {styles.textInput} onChangeText={(prenom) => setPrenom(prenom)}>
                            {Prenom}
                        </TextInput>
                        <TouchableOpacity style= {styles.button} onPress={() => modifierPrenom(Prenom, Matricule)}> 
                            <Text style= {styles.buttonInput}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style= {styles.br}></View> 
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>Matricule</Text>
                    <View style= {styles.rowInput}>
                        <TextInput style= {styles.textInput} onChangeText={(matricule) => setMatriculeMo(matricule)}>{Matricule}</TextInput>
                        <TouchableOpacity style= {styles.button} onPress={() => modifierMatricule(Matricule, MatriculeM)}> 
                            <Text style= {styles.buttonInput}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style= {styles.br}></View> 
                <View style= {styles.input}>
                    <Text style= {styles.titleInput}>CIN</Text>
                    <View style= {styles.rowInput}>
                        <TextInput style= {styles.textInput} onChangeText={(cin) => setCin(cin)}>{Cin}</TextInput>
                        <TouchableOpacity style= {styles.button} onPress={() => modifierCin(Cin)}> 
                            <Text style= {styles.buttonInput}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style= {styles.buttonView}>
                <TouchableOpacity style= {styles.buttonPass}>
                    <Text style= {styles.textButtonPass}> MODIFIER MOT DE PASSE</Text>
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
        height: '35%',
        width: '100%',
       

    },
    navContainer:{
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        
    },
    iconH: {
        marginRight:'5%',
        marginLeft: '5%',
        color: '#073985ff',
        fontWeight: "bold",
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
       height: "65%",
       alignItems: "center",
   },
   infoView: {
       width: "90%",
       height: "90%",
       paddingTop: 10,


   },
   input: {
    marginBottom: 10,
    marginTop: 10,
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
    marginTop: 20,
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