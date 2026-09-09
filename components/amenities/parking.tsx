import { SquareParking } from "lucide-react";
import AmenitySection from "./amenitySection";

export default function Pets() {
  return (
    <AmenitySection
      title="Pets"
      icon={SquareParking}
      items={[
        <>
          Deerfield is a pet-friendly neighborhood. Dogs and cats are welcome so
          long as their presence does not infringe on the rights and comfort of
          others in the neighborhood. Pets must always be on a leash when off
          the property of the resident, and feces must always be picked up and
          properly disposed of.
        </>,

        <>Neighbors must not be disturbed by excessive barking.</>,

        <>
          Failure to abide by these rules is a violation of Knoxville City
          codes.
        </>,

        <>These spaces are not to be used for storage of vehicles.</>,
      ]}
    />
  );
}
