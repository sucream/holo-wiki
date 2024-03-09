import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="mx-2 mb-2 flex h-24 rounded-b-lg bg-cyan-200 p-2 shadow-md">
      <Link href="/" className="flex items-center ">
        <Image
          src={"/hololive.svg"}
          alt="Holo Wiki"
          width={40}
          height={40}
          className="m-2"
        />
        <div className="flex flex-col items-center text-xl font-bold">
          <span>HOLO</span>
          <span>WIKI</span>
        </div>
      </Link>
      <div className="mx-2 flex flex-grow items-center justify-end space-x-4">
        <Link href="/schedule" className="flex items-center">
          <span className="text-lg font-bold">Schedule</span>
        </Link>
        <Link href="/talents" className="flex items-center">
          <span className="text-lg font-bold">Talents</span>
        </Link>
      </div>
    </div>
  );
}
