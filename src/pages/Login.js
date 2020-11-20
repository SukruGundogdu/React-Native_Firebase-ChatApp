import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import { resolveAuthError } from "../functions"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(){
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => alert("OK"))
    //   .catch((err) => Alert.alert("ClarusChat", resolveAuthError(err.code)));

      try {
        if (email === '' || password === '') {
          Alert.alert('ClarusChat', resolveAuthError('auth/null-value'));
        } else {
          await auth().signInWithEmailAndPassword(email, password);
          alert("OK")
        }
      } catch (error) {
        Alert.alert('ClarusChat', resolveAuthError(error.code));
      }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>

          <View style={authStyle.container} >
              <Image
                style={authStyle.logo}
                source={require("../assets/logo.jpeg")}
              />
              <Text style={authStyle.logoText}>ClarusChat</Text>
          </View>

          <View style={{flex:1}} >
            <Input
              inputProps={{
                placeholder: "Type your email address..",
                keyboardType: "email-address"
              }}
              onType={value => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: "Type your password..",
                secureTextEntry: true
              }}
              onType={value => setPassword(value)}
            />
          </View>

          <Button title="Sign In"
            onPress={() => login()}
          />
          <Button title="Sign Up" noBorder  onPress={() => props.navigation.navigate("Sign")} />
        
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};