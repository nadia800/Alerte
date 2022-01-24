import { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity, TouchableOpacityBase, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient}  from 'expo-linear-gradient';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';


const radioButtonsData = [{
    id: '1', 
    label: 'Voiture',
    value: 'voiture',
    color: '#B0E0E6'
}, {
    id: '2',
    label: 'Moteur',
    value: 'moteur',
    color: '#B0E0E6'
}]


export const Ajouter = ({ route, navigation}) =>{
    const Cin = route.params.Cin;
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
   const [voiture, setVoiture]= useState(false);
   const [moteur, setmoteur]= useState(false);
   const [matricule, setMatricule] = useState();
   const[etat, setEtat] = useState();
   const[adresse, setAdress] = useState();
   const[NomAgent, setNom] = useState('Hi');
   const [radioButtons, setRadioButtons] = useState(radioButtonsData)
   
   function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    }
    const AjouteVehicule =  async() => {
        let Type = '';
        if(voiture){
            Type ="voiture"
        }else{Type = "moteur"}
        try{
            const response = await fetch('http://192.168.1.4:3000/vehicule/ajouter', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Matricule : matricule,
                    Etat : etat,
                    Adresse : adresse,
                    Type : Type,
                    NomAgent: NomAgent
                })
            })
            if(response.status == 201){
              Alert.alert("Le facture est ajouter")
            }
        }
        catch(error) {
            console.error(error);
        };
    }

   

    return (
        <View style= {styles.mainView}>

            <View style= {styles.navContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("AccueilA", {Cin})}>
                    <Ionicons style= {styles.iconH} name="home" size={30}  />
                    <Text style= {styles.title}>Ajouter</Text>
                </TouchableOpacity>
            </View>

        <LinearGradient colors={['#073985ff', '#2c6ccbff', '#3c80e8ff']}   style= {styles.buttomView}>
            
                <View style= {styles.form}>
                    <View style= {styles.inputContainer}>
                        <Text style= {styles.inputTitle}>Matricule véhicule:</Text>
                        <TextInput style= {styles.inputText} onChangeText={(matricule) => setMatricule(matricule)}/>
                    </View>
                    
                    <View style= {styles.inputContainer}>
                        <Text style= {styles.inputTitle}>Type de véhicule:</Text>
                        <RadioGroup 
                            containerStyle={{marginLeft:50}}
                            radioButtons={radioButtons} 
                            onPress={onPressRadioButton} 
                            layout='row'
                        />
                        </View>
                    
                    <View style= {styles.inputContainer}>
                        <Text style= {styles.inputTitle}>Etat de véhicule:</Text>
                        <TextInput style= {styles.inputText} onChangeText={(etat) => setEtat(etat)}/>
                    </View>
                    <View style= {styles.inputContainer}>
                        <Text style= {styles.inputTitle}>Adresse de la fourrière :</Text>
                        <TextInput style= {styles.inputText} onChangeText={(adresse) => setAdress(adresse)}/>

                        

                    <TouchableOpacity style={styles.ajouterBtn} onPress={AjouteVehicule}>
                         <Text style={styles.ajouterText}>Ajouter</Text>
                    </TouchableOpacity>
      
                        
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
        
        


    },
    form: {
        width: '90%',
        height: '100%',
        marginTop: 40,
        flexDirection:'column',        
    }, 
    inputContainer: {
        flexDirection: 'column',
        marginTop: 15,

    },
    inputTitle: {
        marginBottom: 10,
        color: "#F5F5F5",
        fontSize: 18,
        marginLeft: 15,
        

    },
   
   

    
    inputText: {
        width: "100%",
        height: 30,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,

    },

    ajouterBtn: {
        width: "70%",
        borderRadius: 30,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35,
        backgroundColor: "#B0E0E6",
        marginLeft: 40,
        
    },
    
    

})