import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import axios from "axios";
import { format } from "date-fns";

type TData = {
  Date: string;
  Max: number;
  Min: number;
};

const Detail = () => {
  const { id } = useParams();

  const [date, setDate] = useState<string>();
  const [max, setMax] = useState<string>();
  const [min, setMin] = useState<string>();

  useEffect(() => {
    const fetchApi = async () => {
      if (!id) return;
      const response = await axios(`http://127.0.0.1:3000/api/v1/weight/${id}`);
      if (!response) return;
      const resWeight: TData = response?.data?.body;
      setDate(format(new Date(resWeight.Date), "yyyy-MM-dd"));
      setMax(resWeight.Max.toString());
      setMin(resWeight.Min.toString());
    };

    fetchApi();
  }, []);

  return (
    <div className="container flex justify-center mt-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Date</Label>
                <Input id="date" type="date" value={date} disabled />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Max Weight</Label>
                <Input
                  disabled
                  id="max_weight"
                  placeholder="Name of your project"
                  value={max}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Min Weight</Label>
                <Input
                  disabled
                  id="min_weight"
                  placeholder="Min Weight"
                  value={min}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link to="/">Cancel</Link>
          </Button>
          <Link to={`/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Detail;
