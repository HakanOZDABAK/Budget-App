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
import { Divider } from "primereact/divider";
import { Dialog } from "primereact/dialog";

export default function Budgets() {
  const intl = useIntl();
  const { token } = useLoginStore();
  const { allData, setAllData } = useDataStore();
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedData,setSelectedData] =useState<any>();
  let budgetService = new BudgetService();

  useEffect(() => {
    if (token) {
      budgetService
        .getAllBudget(token)
        .then((result) => setAllData(result.data));
    } else {
      setAllData(null);
    }
  }, [token, location.pathname]);

  const handleDeleteData = async (id: string) => {
    await budgetService.deleteBudget(id, token);
    const updatedData = allData.filter((item: any) => item.id !== id);
    setAllData(updatedData);
  };

  const handleEditPopUp = (id: string) => {
    setSelectedData(budgetService.getBudgetById(id,token))
    setVisible(true)

  };

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
          field="budgetOften"
          filter
          header={intl.formatMessage({
            id: "budgetOften",
          })}
        ></Column>
        <Column
          body={(rowData) => {
            return (
              <span
                style={{ color: rowData.budgetValue < 0 ? "red" : "green" }}
              >
                {rowData.budgetValue}
              </span>
            );
          }}
          field="budgetValue"
          filter
          header={intl.formatMessage({
            id: "budgetValue",
          })}
        ></Column>
        <Column
          header={intl.formatMessage({ id: "deleteAndUpdate" })}
          body={(rowData) => {
            return (
              <div>
                {" "}
                <i
                  className="mr-2 pi pi-delete-left"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => handleDeleteData(rowData.id)}
                ></i>
                <i
                  className="ml-2 pi pi-pencil"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => handleEditPopUp(rowData.id)}
                ></i>
              </div>
            );
          }}
        ></Column>
      </DataTable>
      <Dialog
        header="Header"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '50vw' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        content={null}
      >
      HELLO WORLD
      </Dialog>
    </div>
  );
}
