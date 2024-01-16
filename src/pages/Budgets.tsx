import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { BudgetService } from "../service/BudgetServices";
import { useLoginStore } from "../store/useLoginStore";

import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";

interface FilterModeOption {
  label: string;
  value: string;
}

export default function Budgets() {
  const intl = useIntl();
  const [data, setData] = useState<any>();
  const { token } = useLoginStore();
  const location = useLocation();
  let budgetService = new BudgetService();

  useEffect(() => {
    if (token) {

      budgetService.getAllBudget(token).then((result) => setData(result.data));
    } else {
      setData(null);
    }
  }, [token, location.pathname]);

   const handleDeleteData = (id:string)=>{
    return budgetService.deleteBudget(id,token).then(()=>console.log("Başarı ile silindi"))
    
   }

  return (
    <div className="card mt-5">
      <DataTable
        value={data}
        scrollable
        scrollHeight="600px"
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
          field="addTime"
          filter
          header={intl.formatMessage({
            id: "budgetAddTime",
          })}
          body={(rowData) => {
            const formattedDate = new Date(
              rowData.addTime
            ).toLocaleDateString();
            return <span>{formattedDate}</span>;
          }}
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
        <Column
          header={intl.formatMessage({ id: "delete" })}
          body={(rowData) => {
            return (
              <i
                className="pi pi-delete-left"
                style={{ fontSize: "2rem" }}
                onClick={() => handleDeleteData(rowData.id)}
              ></i>
            );
          }}
        ></Column>
      </DataTable>
    </div>
  );
}
