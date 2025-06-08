import React from "react";
import { data } from "../../result";
import { AgGridReact } from "ag-grid-react";
import { getTableData } from "../../utils";

const columns = [
  {
    field: "id",
    headerName: "Rank",
    sortable: true,
    width: 100,
  },
  {
    field: "name",
    headerName: "Fertilizer",
    sortable: true,
  },
  {
    field: "value",
    headerName: "Total Value",
    sortable: true,
  },
];

function Assignment() {
  const tableData = getTableData(data, "requirement_in_mt_");
  console.log(tableData, "tableData");

  const lowestAvailability = getTableData(data, "availability_in_mt_", "asc");

  console.log(lowestAvailability, "lowestAvailability");
  return (
    <div className="home">
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <div>Top 5 Most Requirement</div>
          <div>
            <div
              className="ag-theme-alpine"
              style={{ height: 300, width: 500 }}
            >
              <AgGridReact
                style={{ width: "100%", height: "100%" }}
                rowData={tableData}
                columnHoverHighlight={true}
                columnDefs={columns}
                onGridReady={(params) => {
                  params.api.sizeColumnsToFit(); // Fit all columns to full width
                }}
              ></AgGridReact>
            </div>
          </div>
        </div>
        <div>
          <div>Least Available</div>
          <div>
            <div
              className="ag-theme-alpine"
              style={{ height: 300, width: 500 }}
            >
              <AgGridReact
                rowData={lowestAvailability}
                style={{ width: "100%", height: "100%" }}
                columnHoverHighlight={true}
                columnDefs={columns}
                onGridReady={(params) => {
                  params.api.sizeColumnsToFit(); // Fit all columns to full width
                }}
                height={200}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
