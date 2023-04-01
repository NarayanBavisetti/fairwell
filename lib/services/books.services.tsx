import axios from "axios";
// api routes
import { BOOKS_ENDOINT, BOOK_WITH_ID_ENDPOINT } from "../../constants/api-routes";

export const Book = {
  create: async (data: any) => {
    try {
      const response = await axios.post(BOOKS_ENDOINT, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  update: async (data: any) => {
    try {
      const response = await axios.put(BOOK_WITH_ID_ENDPOINT(data.id), data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  delete: async (data: any) => {
    try {
      const response = await axios.delete(BOOK_WITH_ID_ENDPOINT(data.id));
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
};
