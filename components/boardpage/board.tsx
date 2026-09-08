import { getBoardMembers } from "@/lib/acttions/getBoardMembers";
import Image from "next/image";
import boardLogo from "@/assets/images/brownicons/board.png";

export default async function Board() {
  const boardMembers = await getBoardMembers();
  return (
    <div>
      <section id="board" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-center mb-3">
            <Image
              src={boardLogo}
              alt=""
              height={75}
              width={100}
              className="h-auto w-auto max-h-24 max-w-24"
            />
          </div>
          {/* Heading */}
          <h2 className="mb-8 text-center text-3xl font-semi-bold text-foreground">
            Board of Directors
          </h2>

          {/* Board Members */}
          <div className="mx-auto w-full max-w-md">
            <table className="hoa-table">
              <tbody>
                {boardMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }
                  >
                    <td className="px-4 py-3">{member.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
