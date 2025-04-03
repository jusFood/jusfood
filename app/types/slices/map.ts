export type CafeLocation = {
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type mapState = {
  markers: CafeLocation[];
};
