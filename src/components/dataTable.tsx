import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { weight } from "../../data.json";
// import { data } from "@/data";

export const DataTable = async () => {
  const navigate = useNavigate();
  const response = await axios("http://localhost:3000/weight");
  // const datas = response.data.restaurants;
  // console.log(datas)
  const data = weight.weights;
  return (
    //   <>{data.map((data) =>
    //   <h1>{data.date}</h1>
    // )}</>
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="text-center">Tanggal</TableHead>
          <TableHead className="text-center">Max</TableHead>
          <TableHead className="text-center">Min</TableHead>
          <TableHead className="text-center">Perbedaan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((data:any) => {
          return (
            <TableRow
              key={data.date}
              onClick={() => navigate(`/detail/${data?.date}`)}
            >
              <TableCell className="font-medium text-left border-b">
                {data.date}
              </TableCell>
              <TableCell className="text-left border-b">
                {data.max_weight}
              </TableCell>
              <TableCell className="text-left border-b">
                {" "}
                {data.min_weight}
              </TableCell>
              <TableCell className="text-right border-b">
                {data.max_weight - data.min_weight}
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
