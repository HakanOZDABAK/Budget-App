
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { TreeNode } from 'primereact/treenode';

interface FilterModeOption {
    label: string;
    value: string;
}

const myTreeNode: TreeNode = {
  id: "unique_id",
  key: "unique_key",
  label: "Ali",
  data: {
    size: "100kb",
    type: "Folder"
  },
  icon: null,
  children: [
    {
      id: "sub_unique_id",
      key: "sub_unique_key",
      label: "Subfolder",
      data: {
        size: "50kb",
        type: "Subfolder"
      },
      icon: null,
      children: [], // Eğer alt düğüm eklemek istiyorsanız buraya ekleyebilirsiniz
      style: {},
      className: "optional-class",
      droppable: true,
      draggable: true,
      selectable: true,
      leaf: false,
      expanded: false
    }
  ],
  style: {},
  className: "optional-class",
  droppable: true,
  draggable: true,
  selectable: true,
  leaf: false,
  expanded: false
};


export default function Budgets() {
  const [nodes, setNodes] = useState<TreeNode[]>([myTreeNode]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [filterMode, setFilterMode] = useState('lenient');
  const [filterOptions] = useState<FilterModeOption[]>([
      { label: 'Lenient', value: 'lenient' },
      { label: 'Strict', value: 'strict' }
  ]);
  console.log(nodes)

  const getHeader = () => {
      return (
          <div className="flex justify-content-end">
              <div className="p-input-icon-left">
                  <i className="pi pi-search"></i>
                  <InputText type="search" onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Global Search" />
              </div>
          </div>
      );
  };

  let header = getHeader();

  return (
      <div className="card mt-5">
          <div className="flex justify-content-center mb-4">
              <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
          </div>
          <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode as "lenient" | "strict" | undefined} tableStyle={{ minWidth: '50rem' }}>
      <Column field="label" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
      <Column field="data.size" header="Size" filter filterPlaceholder="Filter by size"></Column>
      <Column field="data.type" header="Type" filter filterPlaceholder="Filter by type"></Column>
    </TreeTable>
      </div>
  )
}