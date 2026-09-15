import { getBoardMembers } from "@/lib/actions/getBoardMembers";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Board() {
  const boardMembers = await getBoardMembers();

  return (
    <section id="board" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
          <CardHeader className="border-b bg-background">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-3">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>

              <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Board of Directors
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <ul className="divide-y">
              {boardMembers.map((member, index) => (
                <li
                  key={member.id}
                  className={
                    index % 2 === 0
                      ? "bg-background px-6 py-4 sm:px-8"
                      : "bg-muted/30 px-6 py-4 sm:px-8"
                  }
                >
                  <span className="text-base font-medium text-foreground">
                    {member.name}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
