"use client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import {
  ClientSideRowModelModule,
  ColDef,
} from "ag-grid-community";
const ClosetGrid = () => {
  const rowData=[
    { name: "Shirt", category: "Clothes", quantity: 3, location: "Closet" },
    { name: "MacBook", category: "Electronics", quantity: 1, location: "Desk" },
  ];

  const columnDefs: ColDef[] = [
    { field: "name" },
    { field: "category" },
    { field: "quantity" },
    { field: "location" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        modules={[ClientSideRowModelModule]}
        stopEditingWhenCellsLoseFocus={true}
        theme = "legacy"
        defaultColDef={{
          editable: true,
          sortable: true,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  );
};

export default ClosetGrid;
