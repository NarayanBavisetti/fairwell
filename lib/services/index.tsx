import axios from "axios";

export const APIFetcher = async (url: any) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const APIUpdater = async (url: any, data: any) => {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };
  
  export const APIRemover = async (url: any) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };
  
  export const APIPostFetcher = async (url: any) => {
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };

  export const APIPostFetcherWithData = async (url: any, data: any) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };