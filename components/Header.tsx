import Image from "next/image"
import Link from "next/dist/client/link"
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#020817] w-fit">
          <Image
            src="https://icons.veryicon.com/png/o/miscellaneous/contribution/empty-box-1.png"
            alt="logo"
            className="invert"
            width={80}
            height={80}
          />
        </div>
    <h1 className="font-bold text-xl text-red-400">DocStore</h1>
      </Link>
      <div className="px-5 flex space-x-4 items-center">
        {/* Theme Button */}
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
      </header>
  )
}

export default Header