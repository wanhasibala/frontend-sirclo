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
  weights: Array<Weight>;
  average: WeightAverage;
};

export const DataTable = () => {
  const [weight, setWeight] = useState<WeightResponse>();
  const fetchApi = async () => {
    const response = await axios("http://127.0.0.1:3000/api/v1/weight/");
    if (!response) return;
    const resWeight = response?.data?.body;
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
          {weight?.weights?.map((weight: Weight) => {
            console.log("=>", weight?.date);
            return (
              <TableRow
                key={weight.date}
                onClick={() => {
                  navigate(`/detail/${weight?.date}`);
                }}
                className="text-center border-b"
              >
                <TableCell className="font-medium ">
                  {format(new Date(weight.date), "yyyy-MM-dd")}
                </TableCell>
                <TableCell className="">{weight.max}</TableCell>
                <TableCell className=""> {weight.min}</TableCell>
                <TableCell className="">{weight.differance}</TableCell>
                <TableCell className="">
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
          <TableRow className="text-center">
            <TableCell>average</TableCell>
            <TableCell>{weight?.average.max}</TableCell>
            <TableCell>{weight?.average.min}</TableCell>
            <TableCell>{weight?.average.differance}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};