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
import { useDataStore } from "../store/useDataStore";

export default function Budgets() {
  const intl = useIntl();
  const { token } = useLoginStore();
  const {allData,setAllData} = useDataStore()
  const location = useLocation();
  let budgetService = new BudgetService();

  useEffect(() => {
    if (token) {

      budgetService.getAllBudget(token).then((result) => setAllData(result.data));
    } else {
      setAllData(null);
    }
  }, [token, location.pathname]);

   const handleDeleteData = async (id:string)=>{
    await budgetService.deleteBudget(id, token);
    const updatedData = allData.filter((item:any) => item.id !== id);
    setAllData(updatedData);


   }

  return (
    <div className="card mt-5">
      <DataTable
        value={allData}
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
