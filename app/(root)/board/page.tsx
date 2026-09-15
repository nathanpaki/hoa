import Board from "@/components/boardpage/board";
import Committees from "@/components/boardpage/committees";
import Officers from "@/components/boardpage/officers";
import { getMeeting } from "@/lib/actions/getMeeting";
import { fullHoaName } from "@/lib/constants";
export default async function BoardPage() {
  const meeting = await getMeeting();

  const currentMeeting = meeting[0];

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
              HOA Board & Officers
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              The Deerfield Homeowners Association is governed by a nine-member
              Board of Directors elected at the annual meeting held each June.
              Residents are encouraged to attend board meetings.
            </p>

            {currentMeeting && (
              <div className="mx-auto mt-8 max-w-2xl rounded-lg border bg-background p-5 text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Board Meeting
                </p>

                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  The Board meets on the{" "}
                  <span className="font-medium text-foreground">
                    {currentMeeting.weekOfMonth}
                  </span>{" "}
                  {currentMeeting.dayOfWeek} of every month at{" "}
                  <span className="font-medium text-foreground">
                    {currentMeeting.time}
                  </span>{" "}
                </p>

                <div className="mt-6 rounded-lg border bg-muted/30 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Meeting Location
                  </p>

                  <address className="mt-2 not-italic leading-7 text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {currentMeeting.location}
                    </span>
                    <br />
                    {currentMeeting.address}
                    <br />
                  </address>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Board */}
      <Board />

      {/* Officers */}
      <Officers />

      {/* Committees */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Deerfield HOA
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Committees
            </h2>
          </div>
        </div>
      </section>

      <Committees />
    </main>
  );
}
