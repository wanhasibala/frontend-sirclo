import { Link } from "react-router-dom";
import { DataTable } from "../components/dataTable";
import { Button } from "@/components/ui/button";
import { SlicingCard } from "@/components/SlicingCard";

function App() {
  return (
    <>
      <div className="container mx-auto py-10  flex flex-col gap-4">
        <Button className="w-fit self-end">
          <Link to={"/create"}>Create New</Link>
        </Button>
        <DataTable />
        <SlicingCard />
      </div>
    </>
  );
}

export default App;
