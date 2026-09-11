import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AdminCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AdminCard({
  title,
  description,
  children,
  footer,
}: AdminCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent>{children}</CardContent>

      {footer && (
        <div className="flex items-center justify-end border-t px-6 py-4">
          {footer}
        </div>
      )}
    </Card>
  );
}
