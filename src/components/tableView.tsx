import { useEffect, useMemo, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useData } from "../hooks/useData";
import type { User } from "../types";
import "react-datepicker/dist/react-datepicker.css";
import EditModal from "./editModal";

const TableView = () => {
  const [data, setData] = useState([]); // Naredil array za podatke
  const [selectedUser, setSelectedUser] = useState(null); // Spremenljivka za upravljanje s uporabniki
  const [globalFilter, setGlobalFilter] = useState(""); // Filter za filtriranje uporabniko znotraj tabele.
  const [editForm, setEditForm] = useState<Partial<User>>({}); // Za urejanje uporabnika v formi, tip partial sem uporabil ker je form na začetku prazen in partial naredi vsa polja opcijska

  const { data: getData = [] } = useData(); //Lasten hook za pridobivanje podatkov
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  }); // spremenljivke za tabelo in velikost tabele
  useEffect(() => {
    if (getData) setData(getData);
  }, [getData]); // To se bo izvedlo 2x, enkrat na moutingu, drugič pa ko dobimo podatke iz getData, ker se spremeni getData.
  const columns = useMemo(
    () => [
      { accessorKey: "Ime", header: "Ime", meta: { className: "text-right" } },
      {
        accessorKey: "Priimek",
        header: "Priimek",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Ulica",
        header: "Ulica",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Poštna številka",
        header: "Poštna številka",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Pošta",
        header: "Pošta",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Država",
        header: "Država",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Davčna številka",
        header: "Davčna številka",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "E-pošta",
        header: "E-pošta",
        meta: { className: "text-right" },
      },
      {
        accessorKey: "Rojstni dan",
        header: "Rojstni dan",
        meta: { className: "text-right" },
      },
      {
        id: "akcije",
        header: "Akcije",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="px-3 py-1 bg-app-secondary/80 text-app-primary rounded-[10px]"
            >
              Uredi
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="px-3 py-1 bg-red-500/80 text-app-secondary/80  rounded-[10px]"
            >
              Izbriši
            </button>
          </div>
        ),
      },
    ],
    [],
  ); // useMemo si zapomne vsebino, ki sem jo podal in se zato ne nalaga ponovno oziroma računa ponovno. Dependecy array je prazen zato se bo ta funkcija izvedla samo ob mountingu

  const handleDelete = (user: User) => {
    setData((prev) => prev.filter((u) => u.Ime !== user.Ime));
  }; // funkcija za izbris uporabnika

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditForm(user);
  }; // funkcija, ki odpre modal za urejanje uporabnika

  const table = useReactTable({
    columns, // naloži stolpce
    data: data, // naloži podatke
    getCoreRowModel: getCoreRowModel(), // procesira podatke v vrsrice
    getPaginationRowModel: getPaginationRowModel(), // omogoča pagination
    getFilteredRowModel: getFilteredRowModel(), // omogoča filtriranje
    state: {
      pagination,
      globalFilter,
    }, // omogoči uporabo moji stanj za tabelo
    onPaginationChange: setPagination, // nastavi potrebne vrednosti za pagination
    onGlobalFilterChange: setGlobalFilter, // nastavi filter, ki ga vnese uporabnik
  });
  //Vrne komponento TableView
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4  overflow-y-auto">
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Išči po imenu..."
          className="px-4 py-2 rounded-[20px] bg-app-primary text-app-secondary"
        />
        <table className="border-spacing-y-2 border-separate">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 bg-app-primary text-app-secondary first:rounded-l-[20px] last:rounded-r-[20px]"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 bg-app-primary text-app-secondary first:rounded-l-[20px] last:rounded-r-[20px] shadow-sm "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 bg-app-primary text-app-secondary rounded-[20px] disabled:opacity-50"
          >
            ←
          </button>
          <span>
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 bg-app-primary text-app-secondary rounded-[20px] disabled:opacity-50"
          >
            →
          </button>
          <EditModal
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            editForm={editForm}
            setEditForm={setEditForm}
            setData={setData}
          />
        </div>
      </div>
    </div>
  );
};

export default TableView;
