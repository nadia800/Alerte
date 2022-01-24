import { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';


export const Aider = ({ route ,navigation }) => {
    const Matricule = route.params.Matricule;
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    const [reclamation, setReclamation] = useState("");

    return (
        <View style= {styles.mainView}>

            <View style= {styles.navContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("AccueilU", {Matricule})}>
                    <Ionicons style= {styles.iconH} name="home" size={30}  />
                </TouchableOpacity>
                <Text style= {styles.title}>Aider</Text>
            
            </View>

            <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.buttomView}>
                <View style= {styles.container}>
                    <View style= {styles.inputContainer1}>
                        <Text style= {styles.inputText}>1.Pour récupérer votre véhicule à la fourrière il faut être muni de :</Text>
                        <Text style={styles.inputSText}>-votre pièce d'identité.</Text>
                        <Text style={styles.inputSText}>-votre permis de conduire.</Text>
                        <Text style={styles.inputSText}>-la carte grise.</Text>
                    </View>
                    <View style= {styles.inputContainer2}>
                        <Text style= {styles.inputText}>2.Le paiemement en ligne n'est pas obligatoire, vous pouvez payer directement en espèces.</Text>
                        
                    </View>
                    <View style= {styles.inputContainer2}>
                        <Text style= {styles.inputText}>3.Si vous ne parvenez pas à trouver votre véhicule, veuillez contacter l'agent de fourrière.</Text>
                        
                    </View>
                    <View style= {styles.inputContainer2}>
                        <Text style= {styles.inputText}>4.En cas de dégâts sur votre véhicule, vous pouvez faire une réclamation en cliquant ci-dessous.</Text>
                        
                    </View>
                    <View style={styles.inputInfo}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Réclamation"
                    placeholderTextColor="#003f5c"
                    onChangeText={(reclamtion) => setReclamation(reclamation)}
                    />
                    </View>

                    <TouchableOpacity style={styles.sendBtn}>
                        <Text style={styles.sendText}>Envoyer</Text>
                    </TouchableOpacity>
                   
                    
                    </View>
                    
                


            </LinearGradient>
        </View>
    )
}


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
        height: 100,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        marginBottom:10,
    },
    inputContainer2: {
        width: "100%",
        height: 75,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        marginBottom:10,
    },
    inputText: {
        paddingLeft: 5,
        fontWeight: "bold",

    },
    inputSText: {
        paddingLeft:10,
        
    },

    inputInfo: {
        backgroundColor: "#ffff",
        borderRadius: 10,
        width: "90%",
        height: 60,
        marginBottom: 5,
        marginTop: 10,
        alignItems:'flex-start',
      },
    
        TextInput: {
        height: 6,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    
      sendBtn: {
        width: "60%",
        borderRadius: 30,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#B0E0E6",
      },

}

)