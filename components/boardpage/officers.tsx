import { getOfficers } from "@/lib/acttions/getOfficers";
import Image from "next/image";
import boardLogo from "@/assets/images/brownicons/board.png";

export default async function Officers() {
  const officers = await getOfficers();
  return (
    <div>
      <section id="officers" className="py-20">
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
            Officers
          </h2>

          {/* Board Members */}
          <div className="mx-auto w-full max-w-md">
            <table className="hoa-table">
              <tbody>
                {officers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }
                  >
                    <td className="px-4 py-3">{member.name}</td>
                    <td className="px-4 py-3">{member.title}</td>
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
