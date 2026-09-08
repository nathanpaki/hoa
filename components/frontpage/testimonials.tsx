import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Testimonials() {
  return (
    <div className="text-center mb-3">
      <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600 mb-3">
        Testimonials
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Card className="w-full max-w-sm bg-gray-200">
          <CardContent>
            <div>
              Deerfield is a peaceful and welcoming community where neighbors
              look out for one another. The well-maintained surroundings and
              strong sense of belonging make it a wonderful place to live.
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm bg-gray-200">
          <CardContent>
            <div>
              Moving to Deerfield was the best decision for our family. The
              friendly atmosphere, excellent amenities, and dedicated
              association make everyday living comfortable and enjoyable.
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm bg-gray-200">
          <CardContent>
            <div>
              Deerfield offers the perfect blend of tranquility and convenience.
              The beautifully kept homes and close-knit community create an
              ideal environment to call home.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
