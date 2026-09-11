"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";

type SaveButtonProps = {
  pending?: boolean;
  children?: React.ReactNode;
};

export default function SaveButton({
  pending = false,
  children = "Save Changes",
}: SaveButtonProps) {
  return (
    <Button type="submit" disabled={pending}>
      <Save className="mr-2 h-4 w-4" />

      {pending ? "Saving..." : children}
    </Button>
  );
}
