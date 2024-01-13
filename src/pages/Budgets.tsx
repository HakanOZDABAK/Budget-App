import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useIntl } from "react-intl";
interface FilterModeOption {
  label: string;
  value: string;
}

export default function Budgets() {
  const intl = useIntl();
  const [nodes, setNodes] = useState<any>([
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1001,
      name: "Anes Butt",
      country: {
        name: "Turkey",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
  ]);

  return (
    <div className="card mt-5">
      <DataTable
        value={nodes}
        scrollable
        scrollHeight="400px"
        style={{ minWidth: "auto" }}
        emptyMessage="No customers found."
      >
        <Column
          field="name"
          filter
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
          field="balance"
          filter
          header={intl.formatMessage({
            id: "budgetAddTime",
          })}
        ></Column>
        <Column
          field="representative.name"
          filter
          header={intl.formatMessage({
            id: "budgetValue",
          })}
        ></Column>
        <Column
          field="company"
          filter
          header={intl.formatMessage({
            id: "budgetOften",
          })}
        ></Column>
      </DataTable>
    </div>
  );
}
