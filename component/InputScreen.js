import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TextInput,
} from 'react-native';

const Input = ({navigation}) => {
  const [prenom, onChangePrenom] = React.useState(null);
  const [mail, onChangeMail] = React.useState(null);

  const handleSubmit = () => {
    //console.log(prenom)
    //console.log(mail)
    fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key':
          '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',
      },
      body: JSON.stringify({
        email: mail,
        attributes: {
          FNAME: 'Elly',
          LNAME: 'Roger',
          prenom: prenom,
        },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [36],
        updateEnabled: false,
        smtpBlacklistSender: ['user@example.com'],
      }),
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="Prenom"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
        placeholder="Adresse mail"
      />
      <Button onPress={handleSubmit} title="Submit" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
  },
});

export default Input;
