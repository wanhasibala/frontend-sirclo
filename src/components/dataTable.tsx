import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export const DataTable =  () => {
  const [weight, setWeight] =useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/weights")
      .then((res) => {

        return res.json();
      })
      .then((data) => {
        console.log(data)
        setWeight(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  // console.log(weight)

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="text-center">Tanggal</TableHead>
          <TableHead className="text-center">Max</TableHead>
          <TableHead className="text-center">Min</TableHead>
          <TableHead className="text-center">Perbedaan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {weight?.map((weight:any) => {
          return (
            <TableRow
              key={weight.date}
              onClick={() => navigate(`/detail/${weight?.date}`)}
            >
              <TableCell className="font-medium text-left border-b">
                {weight.date}
              </TableCell>
              <TableCell className="text-left border-b">
                {weight.max_weight}
              </TableCell>
              <TableCell className="text-left border-b">
                {" "}
                {weight.min_weight}
              </TableCell>
              <TableCell className="text-right border-b">
                {weight.max_weight - weight.min_weight}
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell>average</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
