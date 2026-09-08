import { APP_NAME } from "@/lib/constants";

import React from "react";
const currentYear = new Date().getFullYear;

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">{APP_NAME}. All Rights Reserved</div>
    </footer>
  );
}
