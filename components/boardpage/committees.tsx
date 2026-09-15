import { getCommittees } from "@/lib/actions/getCommittees";
import { Building2, Waves, HandHeart, Trees, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const committeeIcons = {
  arch: Building2,
  pool: Waves,
  hospitality: HandHeart,
  grounds: Trees,
  roof: Home,
} as const;
export default async function Committees() {
  const committees = await getCommittees();
  return (
    <section id="committees" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {committees.map((committee) => {
            const Icon =
              committeeIcons[committee.image as keyof typeof committeeIcons] ??
              Building2;
            return (
              <Card
                key={committee.id}
                className="h-full overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardHeader className="border-b bg-background">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary p-3">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl tracking-tight sm:text-2xl">
                      {committee.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {committee.members.map((name, index) => (
                      <li
                        key={`${committee.id}-${index}`}
                        className={
                          index % 2 === 0
                            ? "bg-background px-6 py-3"
                            : "bg-muted/30 px-6 py-3"
                        }
                      >
                        <span className="text-base text-foreground">
                          {name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
