import { useState } from "react";
import { StyleSheet, Image, Platform, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // ref={mapRef}
        // initialRegion={markers[0].coordinates}
      >
        {/* {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.name}
            coordinate={marker.coordinates}
          />
        ))} */}
        <Text>123</Text>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  map: {
    flex: 1,
  },
});
