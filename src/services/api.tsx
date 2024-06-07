import axios from "axios";

export const fetchFinancialData = async () => {
  try {
    console.log("response calling financials");
    const response = await axios.get(
      "https://flaskbackend-hokw.onrender.com/financials"
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching financial data:", error);
    throw error;
  }
};
