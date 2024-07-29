import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
type TData = {
  Date: string;
  Max: number;
  Min: number;
};
const Edit = () => {
  const { id } = useParams();

  const [date, setDate] = useState<string>();
  const [max, setMax] = useState<string>();
  const [min, setMin] = useState<string>();
  const navigate = useNavigate();

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

  const onSubmit = useCallback(async () => {
    if (!date || !max || !min) return;

    await axios
      .put(`http://127.0.0.1:3000/api/v1/weight/${date}`, {
        max: Number(max),
        min: Number(min),
      })
      .then(function () {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [date, max, min, axios]);

  return (
    <div className="container flex justify-center mt-10">
      <Card className="w-[350px]">
        <form onSubmit={onSubmit} method="PUT">
          <CardHeader>
            <CardTitle>Your Weight</CardTitle>
          </CardHeader>
          <CardContent>
            {/* {data.map((data) => { */}
            {/* return( */}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Date</Label>
                <Input id="date" type="date" value={date} readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Max Weight</Label>
                <Input
                  id="max_weight"
                  placeholder="Name of your project"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Min Weight</Label>
                <Input
                  id="min_weight"
                  placeholder="Min Weight"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
            </div>
            {/* )})} */}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link to={`/`}>Cancel</Link>
            </Button>
            <Button type="button" onClick={onSubmit}>
              Save
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default Edit;
