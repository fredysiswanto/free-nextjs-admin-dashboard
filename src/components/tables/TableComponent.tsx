"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { redirect } from "next/navigation";
import { TCustomer } from "@/data/customer";

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
};

const TableComponent = <TData,>({ data, columns }: TableProps<TData>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sorting, setSorting] = useState<any[]>([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const handelView = (dataUser: TCustomer) => {
    const userId = dataUser.user_id;
    redirect(`/admin/users/${userId}`);
  };

  const table = useReactTable({
    data,
    columns: [
      {
        id: "index",
        header: "No",
        cell: ({ row }) => row.index + 1,
      },
      ...columns,
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              className="rounded bg-blue-500 px-2 py-1 text-white"
              onClick={() => handelView(row.original as TCustomer)}
            >
              View
            </button>
            <button className="rounded bg-yellow-500 px-2 py-1 text-white">
              Edit
            </button>
            <button className="rounded bg-red-500 px-2 py-1 text-white">
              Delete
            </button>
          </div>
        ),
      },
    ],
    state: { sorting, globalFilter: filtering, pagination },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPagination,
  });

  return (
    <div className="w-full rounded-lg border p-4 shadow-md">
      <input
        className="mb-4 w-full rounded border border-gray-300 p-2"
        placeholder="Search..."
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer border border-gray-300 p-2"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="odd:bg-white even:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <button
          className="rounded border border-gray-300 px-4 py-2 disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>Page {table.getState().pagination.pageIndex + 1}</span>
        <button
          className="rounded border border-gray-300 px-4 py-2 disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
