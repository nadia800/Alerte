import { Alert } from 'react-native';
exports.modifierNom = async (Nom, Matricule) => {
    try{
        const response = await fetch('http://192.168.1.4:3000/conducteur/modifierNom', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            Matricule: Matricule,
            Nom : Nom
            })
        })
        const res = await response.json();
        if(response.status == 201){
            Alert.alert("Votre nouvel nom est : " + Nom)
        }
    }
    catch(error) {
        console.error(error);
    }
}

exports.modifierPrenom = async (Prenom, Matricule) => {
    try{
        const response = await fetch('http://192.168.1.4:3000/conducteur/modifierPrenom', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            Matricule: Matricule,
            Prenom : Prenom
            })
        })
        const res = await response.json();
        if(response.status == 201){
            Alert.alert("Votre nouvel prenom est: " + Prenom)
        }
    }
    catch(error) {
        console.error(error);
    }
}

exports.modifierCin = async (Cin, Matricule) => {
    try{
        const response = await fetch('http://192.168.1.4:3000/conducteur/modifierCin', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            Matricule: Matricule,
            Cin : Cin
            })
        })
        const res = await response.json();
        if(response.status == 201){
            Alert.alert("Votre nouvel numero de Cin est: " + Cin);
        }
    }
    catch(error) {
        console.error(error);
    }
}

exports.modifierMatricule = async (Matricule, MatriculeM) => {
    try{
        const response = await fetch('http://192.168.1.4:3000/conducteur/modifierMatricule', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            Matricule: Matricule,
            MatriculeM: MatriculeM
            })
        })
        const res = await response.json();
        if(response.status == 201){
            Alert.alert("Votre nouvel numero Matricule est: " + MatriculeM);
        }
    }
    catch(error) {
        console.error(error);
    }
}