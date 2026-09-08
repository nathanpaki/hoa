import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

//import Menu from "./menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur px-4 md:px-6 shadow-sm">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src="/images/smpl.png"
              alt={"${APP_NAME} logo"}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">{/* <Menu /> */}</div>
      </div>
    </header>
  );
};

export default Header;
