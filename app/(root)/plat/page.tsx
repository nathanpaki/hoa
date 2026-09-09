import { FileText, Map, Scale } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import plat from "@/assets/images/condo/plat.png";
import { fullHoaName } from "@/lib/constants";

export default function CovenantPlatPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {fullHoaName}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Covenant & Plat
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Important documents and information governing the Deerfield
              community, including the subdivision covenants, restrictions,
              by-laws, amendments, and plat.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Covenant */}
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader className="border-b bg-background">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary p-3">
                    <Scale className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Covenant
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6 sm:p-8">
                <p className="text-base leading-7 text-muted-foreground">
                  Covenant, Restrictions & By-Laws for the Deerfield Homeowners
                  Association.
                </p>

                <p className="text-base leading-7 text-muted-foreground">
                  This document contains the governing restrictions and
                  requirements for the Deerfield community. The document is
                  approximately 54 pages and may take some time to load.
                </p>

                <a
                  href="/documents/covenant.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <FileText className="h-4 w-4" />
                  View Covenant
                </a>
              </CardContent>
            </Card>

            {/* Amendment */}
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader className="border-b bg-background">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary p-3">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Amendment
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6 sm:p-8">
                <p className="text-base leading-7 text-muted-foreground">
                  View the current amendment to the Deerfield covenant
                  documents.
                </p>

                <a
                  href="/documents/covenant-amendment.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <FileText className="h-4 w-4" />
                  View Amendment
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plat */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="overflow-hidden transition-shadow hover:shadow-md">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary p-3">
                  <Map className="h-6 w-6 text-primary-foreground" />
                </div>

                <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Deerfield Plat
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6">
              <div className="overflow-hidden rounded-lg border bg-muted/30">
                <Image
                  src={plat}
                  alt="Deerfield subdivision plat"
                  className="mx-auto h-auto max-w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
