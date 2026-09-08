import { Waves } from "lucide-react";
import AmenitySection from "./amenitySection";
export default function Pool() {
  return (
    <AmenitySection
      title="Swimming Pool"
      icon={Waves}
      items={[
        <>
          <strong className="text-foreground">Pool</strong> – Deerfield Pool is
          available May 1 – September 30, and the hours are 8:00 a.m. to 10:00
          p.m.
        </>,
        <>
          A resident must accompany guests at all times. Pool rules are posted,
          and failure to comply with rules can result in cancellation of a pool
          card.
        </>,
        <>
          Compliance with pool rules is for the safety of all users. No animals
          are allowed in the pool – this is a health department violation.
        </>,
      ]}
    />
  );
}
