import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";
import Constants from 'expo-constants';

// or any pure javascript modules available in npm

const upiApp = "phonepe";
const payee = "abc@paytm";
const payeeName = "ABC";

const paymentUri = `${upiApp}://upi://pay?pa=${payee}&pn=${payeeName}&tn=test&am=1&cu=INR`;

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
export default function App() {
  return (
    <View style={styles.container}>
      <OpenURLButton url={paymentUri}>Load up my wallet</OpenURLButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
