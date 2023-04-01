import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar.tsx";
import Button from "../components/buttons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-stretch">
        <div className="flex-grow min-h-screen bg-[#EDF1D6] px-10 pt-10">
          <div className="text-2xl font-bold text-[#40513B] capitalize">
            we bring book fairs to you!
          </div>
          <div className="mt-10 space-x-5">
            <Link href="/signin" legacyBehavior>
              <a>
                <Button variant="primary">Sign In</Button>
              </a>
            </Link>

            <Link href="/signup" legacyBehavior>
              <a>
                <Button variant="primary">Sign Up</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-none h-[900px]">
          <Image
            src="/library.jpeg"
            alt="library"
            width={600}
            height={1200}
            className="object-contain"
            quality={100}
          ></Image>
        </div>
      </div>
    </>
  );
}
