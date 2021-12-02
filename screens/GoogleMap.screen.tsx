import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Constants from '../core/config/Constants';

const GoogleMapScreen = ({ coordinate, region }: any) => {
    const { width, height } = Dimensions.get("window");
    const [isReady, setIsReady] = useState<boolean>(false);

    return (
        <View style={{ width, height }}>
            <MapView
                onMapLoaded={() => setIsReady(true)}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                loadingIndicatorColor="#e21d1d"
                loadingEnabled={true}
                initialRegion={{
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta,
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude
                }}
                showsUserLocation={true}
            >
                {
                    isReady && <Marker
                        key={Constants.API_KEY}
                        identifier="marker"
                        coordinate={{
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude
                        }}
                        flat={true}
                    />
                }
            </MapView>
        </View>
    );
}

export default GoogleMapScreen;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})