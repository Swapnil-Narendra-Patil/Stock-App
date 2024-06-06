import axios from "axios";

export const fetchFinancialData = async () => {
  try {
    const response = await axios.get("/financials");
    return response.data;
  } catch (error) {
    console.error("Error fetching financial data:", error);
    throw error;
  }
};
