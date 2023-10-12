import React, { createContext, useContext, FC } from "react";
import { Bike } from "./models";

type BikeContextType = {
  getBikesList: () => Promise<Bike[]>;
  getBike: (id: string) => Promise<Bike>;
};


const defaultValue: BikeContextType = {
  getBikesList: async () => [],
  getBike: async (id: string) => { return {} as Bike},
};

export const BikeContext = createContext<BikeContextType>(defaultValue);

export const useBike = () => useContext(BikeContext);

type Props = {
  children: React.ReactNode;
};

const BikeProvider: FC<Props> = ({ children }) => {

  const getBikesList = async () => {
    try {
      const res = await fetch('https://bikeindex.org/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen');
      const data = await res.json();
      console.log(data);
      return data.bikes;
    } catch (error) {
      throw new Error('Error fetching bike list: ' + error);
    }
  }

  const getBike =  async (id: string) => {
    try {
      const res = await fetch(`https://bikeindex.org/api/v3/bikes/${id}`);
      const data = await res.json();
      return data.bike;
    } catch (error) {
      throw new Error('Error fetching bike: ' + error);
    }
  }
  const values = {
    getBikesList,
    getBike
  };



  return (
    <BikeContext.Provider value={values}>
      {children}
    </BikeContext.Provider>
  );
};

export default BikeProvider;
