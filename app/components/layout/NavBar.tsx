// components/NavBar.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";
import SignInButtons from "../auth/client/SignInButtons";

const NavBar = () => {
  return (
    <nav className={cn("flex", "justify-between", "items-center", "p-4")}>
      <Link href="/">
        <span className={cn("text-xl", "cursor-pointer")}>CuratedDev</span>
      </Link>
      {/* <Link href="/signin" className={cn("px-4", "py-2", "cursor-pointer")}>
        Sign In
      </Link> */}

      <SignInButtons />
    </nav>
  );
};

export default NavBar;
