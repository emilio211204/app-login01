import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen( { navigation}: any) {
    const [correo, setcorreo] = useState('');
    const [contrasena, setcontrasena] = useState('');

    function login() {
        signInWithEmailAndPassword(auth, correo, contrasena)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                navigation.navigate('Welcome')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                let titulo=""
                let mensaje=""
                // ...
                console.log(errorCode, errorMessage)
                if (errorCode == 'auth/Ivalid-credential') {
                    Alert.alert('Contraseña incorrecta')
                    titulo="Credenciales inválidas"
                    mensaje="Las credenciales son incorrectas, Verificar"
                }else if (errorCode == 'auth/invalid-email') {
                    titulo="Error en el correo"
                    mensaje="El correo es incorrecto, Verificar"
                }else{
                    titulo="Error"
                    mensaje="Verifique correo y contraseña"
                }

                Alert.alert(titulo, mensaje)

            });

}

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    placeholder='Ingresar Correo'
                    style={styles.input}
                    onChangeText={setcorreo} />
                <TextInput
                    placeholder='Ingresar Contraseña'
                    style={styles.input}
                    onChangeText={setcontrasena}
                    secureTextEntry={true} />
                <Button title='Ingresar' onPress={() => login()} />
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.regis}>Crear una cuenta</Text>    
                    </TouchableOpacity>

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
        },
        regis:{
            color:'blue',
            fontSize:15,
            textAlign:'center'
        }
    })