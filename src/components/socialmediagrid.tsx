"use client";
import React, { useEffect, useRef, useMemo } from "react";
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
      rowData: [
        {
          title: "Funny Cat Compilation",
          platform: "TikTok",
          url: "https://www.tiktok.com/@user/video/12345",
          dateAdded: "2025-04-01",
        },
        {
          title: "Sunset Photography",
          platform: "Instagram",
          url: "https://www.instagram.com/p/ABC123/",
          dateAdded: "2025-03-28",
        },
        {
          title: "DIY Home Decor",
          platform: "TikTok",
          url: "https://www.tiktok.com/@user/video/67890",
          dateAdded: "2025-02-15",
        },
        {
          title: "Travel Vlog",
          platform: "Instagram",
          url: "https://www.instagram.com/p/XYZ789/",
          dateAdded: "2025-01-20",
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
        onGridReady={(params: GridReadyEvent<IRow>) => {
          gridApi.current = params.api;
        }}
      />
    </div>
  );
};

export default ClosetGrid;
