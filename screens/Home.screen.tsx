import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation: { navigate }, coordinate, setCoordinate }: any) => {
  const handleChange = (key: string, value: number) => {
    value = value ?? 0.0;
    setCoordinate({ ...coordinate, [key]: value });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.largeFont}>Ingrese coordernada de Latitud:</Text>
        <TextInput
          style={styles.largeFont}
          keyboardType="numeric"
          defaultValue={coordinate.latitude.toString()}
          onChangeText={(text) => handleChange("latitude", Number(text))}
        />
        <Text />
        <Text style={styles.largeFont}>Ingrese coordernada de Longitud:</Text>
        <TextInput
          style={styles.largeFont}
          keyboardType="numeric"
          defaultValue={coordinate.longitude.toString()}
          onChangeText={(text) => handleChange("longitude", Number(text))}
        />
        <Text />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Google Maps"
          onPress={() => navigate('GoogleMap')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
  },
  largeFont: {
    fontSize: 20
  },
});