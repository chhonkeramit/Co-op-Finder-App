import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Location from "expo-location"; // Users current location
import { useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';

export default function App() {
  const latLongDelta = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    ...latLongDelta
  })
  const [currentLoc, setUserLocation] = useState();
  async function GetLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service",
        [{ text: "ok"}],
        { cancelable: false }
      )
    }

    let { coords } = await Location.getCurrentPositionAsync(); // is to get current position coords. - lat long position details

    if (coords) {
      const { latitude, longitude } = coords;

      setRegion({
        latitude, longitude, ...latLongDelta
      })

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      // we are trying to get the place names, street name, postal code etc

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`

        setUserLocation(address);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Button title="View Your location" onPress={GetLocation}/>
      <Text>{currentLoc}</Text>
      <MapView style={styles.map} initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            ...latLongDelta
      }} region={region}>
        {
          // just an array iteration here to show multiple markers.
        }
        <Marker coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
        }}
          pinColor="black"
        >
          <Callout>
            <Text>{'Hey this is Canada'}</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '80%'
  }
});