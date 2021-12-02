import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from "react";
import HomeScreen from "./screens/Home.screen";
import GoogleMapScreen from "./screens/GoogleMap.screen";
import LocationCoordinateModel from "./models/LocationCoordinate.model";
import RegionLocationModel from "./models/RegionCoordinate.model";

const App = () => {
  const [coordinate, setCoordinate] = useState<LocationCoordinateModel>({
    latitude: 18.486057,
    longitude: -69.931213
  });
  const [region, setRegion] = useState<RegionLocationModel>({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Seleccione coordenadas' }}
          children={props => <HomeScreen {...props}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
            region={region}
            setRegion={setRegion}
          />}
        />

        <Stack.Screen
          name="GoogleMap"
          options={{ title: 'Google Maps' }}
          children={props => <GoogleMapScreen {...props} coordinate={coordinate} region={region} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;