import axios from "axios";
// api routes
import { AUTHORS_ENDOINT, AUTHOR_WITH_ID_ENDPOINT } from "../../constants/api-routes";

export const Author = {
  create: async (data: any) => {
    try {
      const response = await axios.post(AUTHORS_ENDOINT, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  update: async (data: any) => {
    try {
      const response = await axios.put(AUTHOR_WITH_ID_ENDPOINT(data.id), data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  delete: async (data: any) => {
    try {
      const response = await axios.delete(AUTHOR_WITH_ID_ENDPOINT(data.id));
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
};
