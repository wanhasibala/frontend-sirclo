import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { format } from "date-fns";
type Weight = {
  date: string;
  max: number;
  min: number;
  differance: number;
};

type WeightAverage = {
  max: number;
  min: number;
  differance: number;
};

type WeightResponse = {
  weight: Weight;
  average: WeightAverage;
};

export const DataTable = () => {
  const [weight, setWeight] = useState<Array<Weight>>([]);
  const fetchApi = async () => {
    const response = await axios("http://127.0.0.1:3000/api/v1/weight/");
    if (!response) return;
    const resWeight = response?.data?.body?.weight;
    setWeight(resWeight);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const navigate = useNavigate();

  const onDelete = useCallback(
    async (date: string) => {
      await axios
        .delete(`http://127.0.0.1:3000/api/v1/weight/${date}`, {
          data: {},
        })
        .then(function () {
          fetchApi();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [axios]
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-center">Tanggal</TableHead>
            <TableHead className="text-center">Max</TableHead>
            <TableHead className="text-center">Min</TableHead>
            <TableHead className="text-center">Perbedaan</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weight?.map((weight: Weight) => {
            return (
              <TableRow
                key={weight.date}
                onClick={() => {
                  navigate(`/detail/${weight?.date}`);
                }}
              >
                <TableCell className="font-medium text-left border-b">
                  {format(new Date(weight.date), "yyyy-MM-dd")}
                </TableCell>
                <TableCell className="text-left border-b">
                  {weight.max}
                </TableCell>
                <TableCell className="text-left border-b">
                  {" "}
                  {weight.min}
                </TableCell>
                <TableCell className="text-right border-b">
                  {weight.differance}
                </TableCell>
                <TableCell className="text-right border-b">
                  <button
                    className="py-1 px-4 bg-red-600 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(format(new Date(weight.date), "yyyy-MM-dd"));
                    }}
                  >
                    <span>Delete</span>
                  </button>
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
    </>
  );
};
