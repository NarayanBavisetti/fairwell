import axios from "axios";
import { SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from "../../constants/api-routes";

export const Authentication = {
  emailLogin: async (data: any) => {
    try {
      const response = await axios.post(SIGN_IN_ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  emailSignUp: async (data: any) => {
    try {
      const response = await axios.post(SIGN_UP_ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
