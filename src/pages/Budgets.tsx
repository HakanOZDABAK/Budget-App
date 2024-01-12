
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { TreeNode } from 'primereact/treenode';
import { DataTable } from 'primereact/datatable';
import { FilterMatchMode } from 'primereact/api';
interface FilterModeOption {
    label: string;
    value: string;
}




export default function Budgets() {
const [nodes, setNodes] = useState<any>([{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
  id: 1001,
  name: 'Anes Butt',
  country: {
      name: 'Turkey',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
}]);
const [filters, setFilters] = useState({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});    const [globalFilterValue, setGlobalFilterValue] = useState('');
  console.log(nodes)


  const onGlobalFilterChange = (e:any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};
const renderHeader = () => {
  return (
      <div className="flex justify-content-end">
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
      </div>
  );
};
const header = renderHeader();

  return (
    <div className="card mt-5">
    <DataTable value={nodes} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }} globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
        <Column field="name" filter  header="Name"></Column>
        <Column field="country.name" filter  header="Country"></Column>
        <Column field="representative.name" filter  header="Representative"></Column>
        <Column field="company" filter  header="Company"></Column>
    </DataTable>
</div>
  )
}