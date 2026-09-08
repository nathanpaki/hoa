import { getCommittees } from "@/lib/acttions/getCommittees";
import Image from "next/image";
import archLogo from "@/assets/images/brownicons/arch.png";
import poolLogo from "@/assets/images/brownicons/pool.png";
import roofLogo from "@/assets/images/brownicons/roof.png";
import groundsLogo from "@/assets/images/brownicons/landscape.png";
import hospitalityLogo from "@/assets/images/brownicons/hospitality.png";

const committeeImages = {
  arch: archLogo,
  pool: poolLogo,
  hospitality: hospitalityLogo,
  grounds: groundsLogo,
  roof: roofLogo,
} as const;

export default async function Committees() {
  const committees = await getCommittees();

  return (
    <div>
      <section id="officers" className="py-20">
        <div className="mx-auto max-w-md px-6">
          {committees.map((committee) => (
            <div key={committee.id} className="mb-10">
              <div className="mb-4 flex flex-col items-center">
                {committee.image &&
                  committeeImages[
                    committee.image as keyof typeof committeeImages
                  ] && (
                    <Image
                      src={
                        committeeImages[
                          committee.image as keyof typeof committeeImages
                        ]
                      }
                      alt={committee.name}
                      width={100}
                      height={60}
                      className="h-20 w-auto"
                    />
                  )}

                <h2 className="text-2xl font-normal">{committee.name}</h2>
              </div>

              <table className="hoa-table">
                <tbody>
                  {committee.members.map((name, index) => (
                    <tr
                      key={`${committee.id}-${index}`}
                      className={
                        index % 2 === 0 ? "bg-background" : "bg-muted/30"
                      }
                    >
                      <td className="px-4 py-3 text-center">{name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="flex justify-center mb-3">
  <Image src={archLogo} alt="" height={75} width={100} />
</div>; */
}
{
  /* Heading */
}
{
  /* <h2 className="mb-8 text-center text-3xl font-semi-bold text-foreground">
  Architectural Control
</h2>; */
}

{
  /* Board Members */
}
{
  /* <div className="mx-auto w-full max-w-md">
  <table className="hoa-table">
    <tbody>
      {committees
        .filter((member) => member.name === "Architectural Control")
        .flatMap((member) =>
          member.members.map((name, index) => (
            <tr
              key={`${member.id}-${index}`}
              className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
            >
              <td className="px-4 py-3">{name}</td>
            </tr>
          )),
        )}
    </tbody>
  </table>
</div>; */
}
