import React, { createContext, useContext, FC } from "react";
import { Bike, BikeList, Filters } from "./models";

type BikeContextType = {
  getBikesList: (filter?: Filters) => Promise<BikeList>;
  getBike: (id: string) => Promise<Bike>;
};


const defaultValue: BikeContextType = {
  getBikesList: async () => { return {} as BikeList},
  getBike: async (id: string) => { return {} as Bike},
};

export const BikeContext = createContext<BikeContextType>(defaultValue);

export const useBike = () => useContext(BikeContext);

type Props = {
  children: React.ReactNode;
};

const BikeProvider: FC<Props> = ({ children }) => {

  const objectToQueryString = (params?: Filters) => {
    if (params === undefined) {
      return '';
    }
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key as keyof Filters])}`)
      .join('&');
    return queryString;
  }
  

  const getBikesList = async (filters?: Filters) => {
    try {
      const res = await fetch('https://bikeindex.org/api/v3/search?' + objectToQueryString(filters));
      const {bikes} = await res.json();
      return BikeList.instance(bikes, filters);
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
