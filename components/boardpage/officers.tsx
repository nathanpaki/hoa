import { getOfficers } from "@/lib/actions/getOfficers";
import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Officers() {
  const officers = await getOfficers();

  return (
    <section id="officers" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
          <CardHeader className="border-b bg-background">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-3">
                <BriefcaseBusiness className="h-6 w-6 text-primary-foreground" />
              </div>

              <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Officers
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <ul className="divide-y">
              {officers.map((officer, index) => (
                <li
                  key={officer.id}
                  className={
                    index % 2 === 0
                      ? "bg-background px-6 py-4 sm:px-8"
                      : "bg-muted/30 px-6 py-4 sm:px-8"
                  }
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <span className="font-medium text-foreground">
                      {officer.name}
                    </span>

                    <span className="text-sm text-muted-foreground sm:text-right">
                      {officer.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
