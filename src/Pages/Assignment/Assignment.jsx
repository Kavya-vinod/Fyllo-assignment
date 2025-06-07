import React from "react";
import { data } from "../../result";
import Piechart from "../../Components/Piechart";
import { AgGridReact } from "ag-grid-react";
import { getSortedRows } from "../../utils";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
  },

  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
];

function Assignment() {
  const mostRequired = getSortedRows(data);
  const leastAvailable = getSortedRows(data, "availability_in_mt_", "asc");
  return (
    <div className="home">
      <Piechart
        data={data}
        title="Lowest 5 Available products"
        dataKey="availability_in_mt_"
        isLow
      />
      <div>Top 5 Most Requirement</div>
      <div className="productListTable">
        <div className="ag-theme-alpine" style={{ width: "100%" }}>
          <AgGridReact
            rowData={mostRequired}
            columnHoverHighlight={true}
            columnDefs={columns}
          ></AgGridReact>
        </div>
      </div>
      <div>Least Available</div>
      <div className="productListTable">
        <div className="ag-theme-alpine" style={{ width: "100%" }}>
          <AgGridReact
            rowData={leastAvailable}
            columnHoverHighlight={true}
            columnDefs={columns}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
