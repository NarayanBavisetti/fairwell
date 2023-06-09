import axios from "axios";
// api routes
import { PUBLISHER_ENDPOINT, PUBLISHER_WITH_ID_ENDPOINT } from "../../constants/api-routes";

export const Publisher = {
  create: async (data: any) => {
    try {
      const response = await axios.post(PUBLISHER_ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  update: async (data: any) => {
    try {
      const response = await axios.put(PUBLISHER_WITH_ID_ENDPOINT(data.id), data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  delete: async (data: any) => {
    try {
      const response = await axios.delete(PUBLISHER_WITH_ID_ENDPOINT(data.id));
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
};
