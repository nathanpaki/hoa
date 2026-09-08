import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function Meeting() {
  return (
    <div className="grid  w-full items-center text-gray-800 pt-10 bg-gray-200">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest px-4">
        Monthyly Meeting
      </p>

      <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600 px-4">
        Join Us for the Monthly HOA Meetings on 2nd Thursday of every month at
        5:30 P.M at Park West Church.
      </h1>

      <p className="mt-4 max-w-full text-md sm:text-md text-gray-600 px-4 ">
        Want to stay informed about what's happening in our community? Have
        ideas or concerns you'd like to share? Whether you're new to the
        neighborhood or a long-time resident, everyone is welcome to attend our
        monthly HOA meetings on 2nd Thursday of the month.
      </p>

      <div className="p-4">
        <Button className="mt-2 size=lg">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
