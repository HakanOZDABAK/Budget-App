import axios from "axios";

export class BudgetService{

getAllBudget(token:string){

return axios.get("http://localhost:8081/api/v1/budget/getbudgetall",{
headers: {
    'Accept': '*/*',
    'Authorization': `Bearer ${token}`,
  }})
}

addBudget(budgetData:any,token:string){

    return axios.post("http://localhost:8081/api/v1/budget/addBudget",budgetData,{
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        
    })
}


}