import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const SlicingCard = () => {
  return (
    <>
      <Card className="p-4 max-w-[400px] rounded-3xl">
        <CardHeader
          style={{ backgroundColor: `#faf5ff` }}
          className=" rounded-xl flex "
        >
          {/* header content */}
          <div className="flex flex-row ">
            <div className="flex justify-between items-center w-full ">
              <div className="flex ">
                <p className="px-4 py-2 bg-white text-sm w-fit h-fit rounded-full">
                  5 minutes ago
                </p>
              </div>
              <a
                className="flex h-10 w-10 bg-white justify-center items-center rounded-full"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  //   class="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </a>
            </div>
          </div>
          {/* title */}
          <div className="pt-10">
            <CardDescription className="pb-2">Google</CardDescription>
            <CardTitle className="text-4xl">Junior UI/UX Designer</CardTitle>
          </div>
          {/* tag */}
          <div className="flex gap-2 flex-wrap pt-10 text-sm">
            <div className="px-4 py-2 rounded-full border w-fit ">
              Full Time
            </div>
            <div className="px-4 py-2 rounded-full border w-fit ">
              Junior Level
            </div>
            <div className="px-4 py-2 rounded-full border w-fit ">
              Project work
            </div>
            <div className="px-4 py-2 rounded-full border w-fit ">
              Flexible Schedule
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-10 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium text-gray-700">$250/hr</p>
            <p className="text-sm text-gray-400">Jakarta, Indonesia</p>
          </div>
          <a
            className="px-4 py-2 bg-gray-800 text-gray-100 rounded-full "
            href=""
          >
            Details
          </a>
        </CardContent>
      </Card>
    </>
  );
};
