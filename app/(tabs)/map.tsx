import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Image, Platform, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { RootState } from "@/app/store";
import { useGetAllCafeInfosQuery } from "@/app/api/cafeApi";
import { setMarkers } from "@/app/store/slices/mapSlice";

export default function MapScreen() {
  const dispatch = useDispatch();
  const markers = useSelector((state: RootState) => state.map.markers);

  const { data, isSuccess } = useGetAllCafeInfosQuery();

  useEffect(() => {
    if (data && isSuccess) {
      const markData = data?.locations.map((item) => ({
        name: item.name,
        address: item.address,
        coordinates: {
          latitude: Number(item.coordinates.latitude),
          longitude: Number(item.coordinates.longitude),
        },
      }));

      dispatch(setMarkers(markData));
    }
  }, [data, isSuccess, dispatch]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // ref={mapRef}
        // initialRegion={markers[0].coordinates}
      >
        {markers &&
          markers.length > 0 &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.name}
              coordinate={marker.coordinates}
            />
          ))}
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
