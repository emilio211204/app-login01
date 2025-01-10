import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../config/Config';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function RestablecerScreen() {
    const [correo, setcorreo] = useState('');
    function restablecer() {
        sendPasswordResetEmail(auth, correo)
            .then(() => {
                // Password reset email sent!
                // ..
                Alert.alert('Mensaje, se envio un mensaje al correo')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                Alert.alert(errorCode, errorMessage)
            });
    }
    return (
        <View>
            <Text>RestablecerScreen</Text>
            <TextInput
                placeholder='Ingresar Correo'
                style={styles.input}
                keyboardType='email-address'
                onChangeText={setcorreo} />
            <Button title='Enviar' onPress={() => restablecer()}/>
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
})