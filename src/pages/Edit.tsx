import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

const Edit = () => {
  const params = useParams();
  return (
    <div className="container flex justify-center mt-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Your Weight</CardTitle>
          </CardHeader>
          <CardContent>
            {/* {data.map((data) => { */}
              {/* return( */}
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Date</Label>
                  <Input
                    id="date"
                    type="date"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Max Weight</Label>
                  <Input
                    id="max_weight"
                    placeholder="Name of your project"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Min Weight</Label>
                  <Input
                    id="min_weight"
                    placeholder="Min Weight"
                  />
                </div>
              </div>
            </form>
            {/* )})} */}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline"><Link to={`/detail/${params.id}`}>Cancel</Link></Button>
            <Link to={`/edit/${params.id}`}><Button>Edit</Button></Link>
          </CardFooter>
        </Card>
      </div>
  );
};
export default Edit;
