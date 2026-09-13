import { School, Satellite, Trash2, UtilityPole } from "lucide-react";
import { getResources } from "@/lib/acttions/getResources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const resourceIcons = {
  school: School,
  satellite: Satellite,
  trash: Trash2,
  utilities: UtilityPole,
} as const;
export default async function Resources() {
  const resources = await getResources();
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Section Header */}{" "}
        {/* <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Deerfield Information{" "}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Community Resources{" "}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Helpful information and services for Deerfield residents.
          </p>
        </div> */}
        {/* Resource Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => {
            const Icon =
              resource.image &&
              resourceIcons[resource.image as keyof typeof resourceIcons];
            return (
              <Card
                key={resource.id}
                className="h-full transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {/* Lucide Icon */}{" "}
                    {Icon && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />{" "}
                      </div>
                    )}
                    <CardTitle className="text-xl">{resource.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.lists.map((list, index) => (
                      <li
                        key={`${resource.id}-${index}`}
                        className="flex items-start gap-3 leading-7 text-muted-foreground"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0 wrap-break-word">{list}</span>
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

// import { getResources } from "@/lib/acttions/getResources";

// import Image from "next/image";

// import schoolLogo from "@/assets/images/resources/school.png";
// import satelliteLogo from "@/assets/images/resources/satellite.png";
// import trashLogo from "@/assets/images/resources/trash.png";
// import utilitiesLogo from "@/assets/images/resources/utilities.png";

// const resourceImages = {
//   school: schoolLogo,
//   satellite: satelliteLogo,
//   trash: trashLogo,
//   utilities: utilitiesLogo,
// } as const;

// export default async function Resources() {
//   const resources = await getResources();

//   return (
//     <section id="resources" className="py-12 sm:py-16 lg:py-20">
//       <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
//         <div className="space-y-8">
//           {resources.map((resource) => {
//             const image =
//               resource.image &&
//               resourceImages[resource.image as keyof typeof resourceImages];

//             return (
//               <div
//                 key={resource.id}
//                 className="rounded-lg border bg-card p-6 shadow-sm sm:p-8"
//               >
//                 {/* Header */}
//                 <div className="mb-6 flex flex-col items-center text-center">
//                   {image && (
//                     <Image
//                       src={image}
//                       alt={resource.name}
//                       width={80}
//                       height={80}
//                       className="mb-4 h-16 w-auto object-contain sm:h-20"
//                     />
//                   )}

//                   <h2 className="text-xl font-normal sm:text-2xl">
//                     {resource.name}
//                   </h2>
//                 </div>

//                 {/* Resource Links */}
//                 <ul className="mx-auto max-w-2xl space-y-3">
//                   {resource.lists.map((list, index) => (
//                     <li
//                       key={`${resource.id}-${index}`}
//                       className="flex items-start gap-3 text-sm leading-6 sm:text-base"
//                     >
//                       <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />

//                       <span className="min-w-0 break-words">{list}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// // import { getResources } from "@/lib/acttions/getResources";
// // import Image from "next/image";
// // import schoolLogo from "@/assets/images/resources/school.png";
// // import satelliteLogo from "@/assets/images/resources/satellite.png";
// // import trashLogo from "@/assets/images/resources/trash.png";
// // import utilitiesLogo from "@/assets/images/resources/utilities.png";

// // const resourceImages = {
// //   school: schoolLogo,
// //   satellite: satelliteLogo,
// //   trash: trashLogo,
// //   utilities: utilitiesLogo,
// // } as const;

// // export default async function Resources() {
// //   const resources = await getResources();
// //   return (
// //     <div>
// //       <section id="officers" className="py-20">
// //         <div className="mx-auto max-w-3xl px-6">
// //           {resources.map((resource) => (
// //             <div key={resource.id} className="mb-10">
// //               <div className="mb-4 flex flex-col items-center">
// //                 {resource.image &&
// //                   resourceImages[
// //                     resource.image as keyof typeof resourceImages
// //                   ] && (
// //                     <Image
// //                       src={
// //                         resourceImages[
// //                           resource.image as keyof typeof resourceImages
// //                         ]
// //                       }
// //                       alt={resource.name}
// //                       width={100}
// //                       height={60}
// //                       className="h-20 w-auto"
// //                     />
// //                   )}

// //                 <h2 className="text-2xl font-normal">{resource.name}</h2>
// //               </div>

// //               <ul className="list-disc pl-6 space-y-2 text-left">
// //                 {resource.lists.map((list, index) => (
// //                   <li key={`${resource.id}-${index}`}>{list}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
