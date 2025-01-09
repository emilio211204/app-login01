import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegisterScreen({ navigation }: any) {
    const [correo, setcorreo] = useState('');
    const [contrasena, setcontrasena] = useState('');

    function register() {
        createUserWithEmailAndPassword(auth, correo, contrasena)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigation.navigate('Welcome')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registro</Text>
            <TextInput
                placeholder='Ingresar Correo'
                style={styles.input}
                onChangeText={setcorreo} />
            <TextInput
                placeholder='Ingresar Contraseña'
                style={styles.input}
                onChangeText={setcontrasena}
                secureTextEntry={true} />
            <Button title='Agregar Cuenta'  onPress={() => register()}/>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        margin: 10,
        height: 50,
        backgroundColor: '#86999c',
        borderRadius: 20,
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        margin: 10,
        textAlign: 'center'
    }
})