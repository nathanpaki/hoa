import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type AmenitySectionProps = {
  title: string;
  icon: LucideIcon;
  items: React.ReactNode[];
};
export default function AmenitySection({
  title,
  icon: Icon,
  items,
}: AmenitySectionProps) {
  return (
    <section className="w-full h-full py-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 h-full">
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
          {/* Header */}
          <CardHeader className="border-b bg-muted/30">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-3">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </CardTitle>
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent className="p-6 sm:p-8">
            <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
