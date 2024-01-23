import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
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
  const [selectedData, setSelectedData] = useState<any>();
  const [inputData,setInputData] = useState<string>("");
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

  const handleEditPopUp = async (id: string) => {
    const budgetData = await budgetService.getBudgetById(id, token);
    setSelectedData(budgetData);
    setVisible(true);
  };

  const handleUpdateData = (data: any, token: string) => {
    const updatedData = {...selectedData.data,budgetValue:data}
    budgetService
      .updateBudget(updatedData, token)
      .then((result) => console.log(result));
  };
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => handleUpdateData(inputData, token)}
        autoFocus
      />
    </div>
  );

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
      modal
      visible={visible}
      onHide={() => null}  // Dialog kapatılmasını istiyorsanız, onHide içinde setVisible(false) çağrısı bırakılabilir
      style={{ width: "50vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      footer={footerContent}
      content={null}
    >
        <div className="card flex justify-content-center">
        <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            import { InputText } from 'path/to/InputText'; // Replace 'path/to/InputText' with the actual path to the InputText component

                            // ...

                            <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
      </div>
    </Dialog>
    </div>
  );
}
