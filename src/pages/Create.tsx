import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CardWithForm() {
  const [date, setDate] = useState<string>();
  const [max, setMax] = useState<string>();
  const [min, setMin] = useState<string>();
  const navigate = useNavigate();

  const onSubmit = useCallback(async () => {
    if (!date || !max || !min) return;

    await axios
      .post("http://127.0.0.1:3000/api/v1/weight", {
        date: date,
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
    <div className="container my-10 flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add New</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  placeholder="date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDate(e.target.value);
                  }}
                  value={date}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="max_weight">Max Weight</Label>
                <Input
                  id="max_weight"
                  type="number"
                  placeholder="Max Weight"
                  onChange={(e) => {
                    setMax(e.target.value);
                  }}
                  value={max}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="min_weight">Min Weight</Label>
                <Input
                  id="min_weight"
                  type="number"
                  placeholder="Min Weight"
                  onChange={(e) => setMin(e.target.value)}
                  value={min}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link to={".."}>Cancel</Link>
            </Button>
            <Button type="button" onClick={onSubmit}>
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
