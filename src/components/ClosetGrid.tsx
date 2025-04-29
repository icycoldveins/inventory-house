"use client";
import React, { useEffect, useRef } from "react";
import {
  AllCommunityModule,
  GridApi,
  GridOptions,
  ModuleRegistry,
  createGrid,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // optional; only if you need legacy/other styles
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  name: string;
  category: string;
  quantity: number;
  location: string;
}

const gridOptions: GridOptions<IRow> = {
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
    { name: "Sneakers", category: "Footwear", quantity: 2, location: "Locker" },
  ],
  columnDefs: [
    { field: "name", headerName: "Name" },
    { field: "category", headerName: "Category" },
    { field: "quantity", headerName: "Quantity" },
    { field: "location", headerName: "Location" },
  ],
  defaultColDef: {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
    editable: true, // Allow cells to be edited
  },
};

const ClosetGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  let gridApi: GridApi;

  useEffect(() => {
    if (gridRef.current) {
      // Create the grid on the referenced div
      gridApi = createGrid(gridRef.current, gridOptions);
    }
  }, []);

  return (
    <div
      id="myGrid"
      className="ag-theme-alpine"
      ref={gridRef}
      style={{ height: "400px", width: "100%" }}
    ></div>
  );
};

export default ClosetGrid;
