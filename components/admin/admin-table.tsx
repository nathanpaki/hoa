import { ReactNode } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type AdminTableColumn = {
  key: string;
  label: string;
  className?: string;
};

type AdminTableProps = {
  columns: AdminTableColumn[];
  children: ReactNode;
};

export default function AdminTable({ columns, children }: AdminTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.className}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>{children}</TableBody>
      </Table>
    </div>
  );
}
