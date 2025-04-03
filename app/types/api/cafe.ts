export type CafeResponse = {
  total_count: number;
  locations: Array<Cafe>;
};

export type Cafe = {
  address: string;
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  district: string;
  id: string;
  name: string;
};
