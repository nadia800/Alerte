import { useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';



export const Register = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const[matricule, setMatricule] = useState("");
    const[cin, setCin] = useState("");
    const[motdepasse, setMotdepasse] = useState("");
    const[repeter, setRepeter] = useState("");
    const[message, setMessage] = useState();
    const handleRegister = async () => {
        try{
            const response = await fetch('http://192.168.1.4:3000/conducteur/inscrit', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                Matricule: matricule,
                Cin: cin,
                Nom: nom,
                Prenom: prenom,
                Pass: motdepasse
                })
            })
            if(response.status == 201){
              navigation.navigate("AccueilU", {Matricule: matricule});
            }
        }
        catch(error) {
            console.error(error);
        };
      }
    return (
        <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.mainView}>



                <Text style= {styles.text}>Inscription</Text>
                <View style={styles.formView} >

                    <View style= {styles.containerInput}>
                        <TextInput placeholder='Nom' style={styles.inputView} onChangeText={(nom) => setNom(nom)}/>
                    </View >
                    <View style= {styles.containerInput}>
                        <TextInput placeholder='Prénom' style={styles.inputView} onChangeText={(prenom) => setPrenom(prenom)}/>
                    </View>
                    <View style= {styles.containerInput}> 
                        <TextInput placeholder='Matricule' style={styles.inputView} onChangeText={(matricule) => setMatricule(matricule)}/>
                    </View>
                    <View style= {styles.containerInput}>
                        <TextInput placeholder='CIN' style={styles.inputView} onChangeText={(cin) => setCin(cin)}/>
                    </View>
                    <View style= {styles.containerInput}>
                        <TextInput placeholder='Mot de Passe' style={styles.inputView} secureTextEntry onChangeText={(pass) => setMotdepasse(pass)}/>
                    </View>
                    
                    <View style= {styles.containerInput}>
                        <TextInput placeholder='Répéter mot de passe' style={styles.inputView} secureTextEntry onChangeText={(repeterPass) => setRepeter(repeterPass)}></TextInput>
                    </View>

                    <View style= {styles.containerCon}>
                    <Text style={styles.text2}>Vous avez déjà un compte? </Text>
                    <Text style= {styles.conTex}>CONNEXION</Text>
                    </View>
                    
                    <TouchableOpacity style= {styles.button}>
                        <Text style={styles.textButton}onPress={handleRegister}>S'INSCRIRE</Text>
                    </TouchableOpacity>
                </View>
                

        </LinearGradient>
    )

   
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

  
    text: {
        marginBottom: 20,
        fontSize: 25,
        color: "white",
        


    },
    formView: {
        justifyContent:"center",
        alignItems: "center",
        width: '100%',

    },
    
   
    containerInput: {
        backgroundColor: "white",
        width: "90%",
        height: 30,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center'

    },
    inputView: {
    marginLeft: 5,
    borderColor: "transparent",
    
    
    },
    containerCon: {
        flexDirection: "row",
        marginBottom: 10,
       
       
     },
     text2: {
        color: "#fff"
     },
     
    conTex : {
        color: "#B0E0E6"
    },

    button: {
        width: 200,
        height: 35,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#FFA07A',
       
    },
    textButton: {
        fontSize: 17,
    },


})
