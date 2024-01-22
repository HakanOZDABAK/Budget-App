import axios from "axios";

export class BudgetService {
  async getAllBudget(token: string) {
    return await axios.get("http://localhost:8081/api/v1/budget/getBudgetAll", {
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
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return result.data;
    } catch (error) {
      console.error("Hata:", error);
      throw error;
    }
  }
  async deleteBudget(id: string, token: string) {
    try {
      const result = await axios.delete(
        `http://localhost:8081/api/v1/budget/deleteBudget/${id}`,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return result
    } catch (error) {
      console.error("Hata:", error);
      throw error;
    }
  }
  async getBudgetById(id: string, token: string) {
    try {
      const result = await axios.get(
        `http://localhost:8081/api/v1/budget/getBudgetById/${id}`,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return result
    } catch (error) {
      console.error("Hata:", error);
      throw error;
    }
  }
  async updateBudget(budgetData: any, token: string) {
    try {
      const result = await axios.put(
        "http://localhost:8081/api/v1/budget/updateBudget",budgetData,

        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",

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
