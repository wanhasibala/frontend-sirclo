
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
import { Link } from "react-router-dom";

export default function CardWithForm() {
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
                <Input id="date" type="date" placeholder="date" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="max_weight">Max Weight</Label>
                <Input id="max_weight" type="number" placeholder="Max Weight" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="min_weight">Min Weight</Label>
                <Input id="min_weight" type="number" placeholder="Min Weight" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline"><Link to={".."}>Cancel</Link></Button>
            <Button type="submit">Create</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
