"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import data from "@/../data.json";
import { Pencil } from "lucide-react";
import { PaginationComponent } from "./PaginationComponent";

const PAGE_SIZE = 10;

const headerTitles = [
  " ",
  "ID",
  "Primeiro Nome",
  "Sobrenome",
  "Email",
  "Genero",
  "Ações",
];

export function CustomDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = data.slice(startIndex, startIndex + PAGE_SIZE);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <Table className="border-b">
        <TableHeader>
          <TableRow>
            {headerTitles.map((title, i) => (
              <TableHead
                key={title}
                className={i === headerTitles.length - 1 ? "text-center" : ""}
              >
                {title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox className="size-4 hover:bg-primary/20" />
              </TableCell>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell className="text-center">
                <Button type="button" className="gap-2 ">
                  <Pencil size={16} />
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-6">
        <span className="">
          Mostrando{" "}
          <span className="font-semibold">
            {startIndex + 1} - {startIndex + currentData.length}
          </span>{" "}
          de <span className="font-semibold">{data.length}</span> resultados
        </span>

        <div>
          <PaginationComponent
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </div>
    </section>
  );
}
