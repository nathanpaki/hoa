import Board from "@/components/boardpage/board";
import Committees from "@/components/boardpage/committees";
import Officers from "@/components/boardpage/officers";
import { getMeeting } from "@/lib/acttions/getMeeting";
// const dayOfWeek = "Thursday";
// const weekOfMonth = "2";
// const time = "5:30 P.M";
// const location = "Park West Church";

export default async function BoardPage() {
  const meeting = await getMeeting();

  return (
    <div className="space-y-2">
      <div className="grid  w-full items-center text-gray-800 pt-10">
        <h2 className="mb-4 text-center text-3xl font-semi-bold text-foreground">
          HOA BOARD & OFFICERS
        </h2>
        <h2 className="mb-4 text-center text-2xl font-semi-bold text-foreground">
          Officers and Committee Members
        </h2>
        <p className="mt-4  text-lg text-gray-600 sm:text-xl">
          The Board meets the {meeting[0].weekOfMonth}nd {meeting[0].dayOfWeek}{" "}
          of every month at {meeting[0].time} at the Park {meeting[0].location}.
          ​Residents are encouraged to attend board meetings. The Homeowners
          Association board of directors is composed of nine members who are
          elected at the annual meeting of the Association held in June each
          year. deerfieldhomeownersassociation@gmail.com
        </p>
      </div>
      <Board />
      <Officers />
      <h2 className="mb-4 text-center text-xl font-semi-bold text-foreground">
        Committees
      </h2>
      <Committees />
    </div>
  );
}
