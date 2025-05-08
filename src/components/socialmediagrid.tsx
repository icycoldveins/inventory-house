"use client";
import React, { useEffect, useRef, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  GridApi,
  GridOptions,
  ColDef,
  GridReadyEvent,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

// Media item interface
interface IRow {
  title: string;
  platform: string;
  url: string;
  dateAdded: string;
}

const ClosetGrid = () => {
  const gridApi = useRef<GridApi | null>(null);
  const [rowData, setRowData] = useState<IRow[]>([]);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "title", headerName: "Title", flex: 2 },
      { field: "platform", headerName: "Platform", flex: 1 },
      {
        field: "url",
        headerName: "URL",
        flex: 3,
        cellRenderer: (params: any) => (
          <a href={params.value} target="_blank" rel="noopener noreferrer">
            {params.value}
          </a>
        ),
      },
      { field: "dateAdded", headerName: "Date Added", flex: 1 },
    ],
    []

  );
  


  const gridOptions: GridOptions<IRow> = useMemo(
    () => ({
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
        rowData={rowData} 
        onGridReady={(params: GridReadyEvent<IRow>) => {
          gridApi.current = params.api;
        }}
      />
    </div>
  );
};

export default ClosetGrid;
