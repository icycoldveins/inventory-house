"use client";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community"; // <-- Add this import
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { ColDef } from "ag-grid-community";

const ClosetGrid = () => {
  const [rowData, setRowData] = useState([
    { name: "Shirt", category: "Clothes", quantity: 3, location: "Closet" },
    { name: "MacBook", category: "Electronics", quantity: 1, location: "Desk" },
  ]);

  const columnDefs: ColDef[] = [
    { field: "name", editable: true },
    { field: "category", editable: true },
    { field: "quantity", editable: true },
    { field: "location", editable: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        modules={[ClientSideRowModelModule]}
      />
    </div>
  );
};

export default ClosetGrid;
