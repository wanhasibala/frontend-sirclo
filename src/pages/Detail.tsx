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

const Detail = () => {
  const params = useParams();
  const url = params.id;
  let [outputData, setOutputData] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/weights/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOutputData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);
  return (
    <>
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
                  <Input disabled id="date" type="date" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Max Weight</Label>
                  <Input
                    disabled
                    id="max_weight"
                    placeholder="Name of your project"
                    // defaultValue={outputData?}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Min Weight</Label>
                  <Input disabled id="min_weight" placeholder="Min Weight" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link to="..">Cancel</Link>
            </Button>
            <Link to={`/edit/${params.id}`}>
              <Button>Edit</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default Detail;
