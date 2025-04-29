"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  GridApi,
  GridOptions,
  ColDef,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

// Row data interface
interface IRow {
  name: string;
  category: string;
  quantity: number;
  location: string;
}

const ClosetGrid: React.FC = () => {
  const gridApi = useRef<GridApi | null>(null);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "name", headerName: "Name" },
      { field: "category", headerName: "Category" },
      { field: "quantity", headerName: "Quantity" },
      { field: "location", headerName: "Location" },
    ],
    []
  );

  const gridOptions: GridOptions<IRow> = useMemo(
    () => ({
      rowData: [
        {
          name: "MacBook Pro",
          category: "Electronics",
          quantity: 1,
          location: "Office",
        },
        {
          name: "iPhone",
          category: "Electronics",
          quantity: 2,
          location: "Pocket",
        },
        { name: "Shirt", category: "Clothes", quantity: 3, location: "Closet" },
        {
          name: "Sneakers",
          category: "Footwear",
          quantity: 2,
          location: "Locker",
        },
      ],
      columnDefs,
      defaultColDef: {
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        editable: true,
      },
    }),
    [columnDefs]
  );

  return (
    <div
      id="myGrid"
      className="ag-theme-alpine"
      style={{ height: "400px", width: "100%" }}
    >
      <AgGridReact
        gridOptions={gridOptions}
        onGridReady={(params) => {
          gridApi.current = params.api;
        }}
      />
    </div>
  );
};

export default ClosetGrid;
