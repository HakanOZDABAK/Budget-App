import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { BudgetService } from "../service/BudgetServices";
import { useLoginStore } from "../store/useLoginStore";
interface FilterModeOption {
  label: string;
  value: string;
}

export default function Budgets() {
  const intl = useIntl();
const [data,setData] = useState<any>()
const {token} = useLoginStore()

useEffect(() => {
  const fetchData = async () => {
    if(token){
      let budgetService = new BudgetService();
      try {
        await budgetService.getAllBudget(token).then(result =>setData(result.data))

  
      } catch (error) {

        console.error('Veri çekme hatası:', error);
      }
    }else{
      setData(null)
    }

  };

  fetchData();

}, [token]);


  return (
    <div className="card mt-5">
      <DataTable
        value={data}
        scrollable
        scrollHeight="400px"
        style={{ minWidth: "auto" }}
        emptyMessage="No customers found."
      >
        <Column
          field="budgetName"
          filter
          frozen 
          header={intl.formatMessage({
            id: "budgetName",
          })}
        ></Column>
        <Column
          body={(rowData) => (
            <span
              style={{ backgroundColor: rowData.balance < 1000 ? "" : "red" }}
            >
              {rowData.balance}
            </span>
          )}
          field="addTime"
          filter
          header={intl.formatMessage({
            id: "budgetAddTime",
          })}
        ></Column>
        <Column
          field="budgetValue"
          filter
          header={intl.formatMessage({
            id: "budgetValue",
          })}
        ></Column>
        <Column
          field="budgetOften"
          filter
          header={intl.formatMessage({
            id: "budgetOften",
          })}
        ></Column>
      </DataTable>
    </div>
  );
}
