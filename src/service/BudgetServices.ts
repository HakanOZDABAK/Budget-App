import axios from "axios";

export class BudgetService {
  getAllBudget(token: string) {
    return axios.get("http://localhost:8081/api/v1/budget/getbudgetall", {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async addBudget(budgetData: any, token: string) {
    try {
      const result = await axios.post(
        "http://localhost:8081/api/v1/budget/addBudget",
        budgetData,
        {
          headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return result.data;
    } catch (error) {
  
      console.error("Hata:", error);
      throw error; 
    }
  }
}
