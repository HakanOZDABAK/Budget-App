import axios from "axios";

export class BudgetService {
 async getAllBudget(token: string) {
    return await axios.get("http://localhost:8081/api/v1/budget/getbudgetall", {
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async addBudget(budgetData: any, token: string) {
    try {
      const result = await axios.post(
        "http://127.0.0.1:8081/api/v1/budget/addBudget",
        budgetData,
        {
          headers: {
            'Accept': '*/*',
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
