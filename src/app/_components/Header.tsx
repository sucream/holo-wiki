import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="mx-2 mb-2 flex h-24 rounded-b-lg bg-cyan-200 p-2 shadow-md">
      <Link href="/" className="flex items-center ">
        <Image
          src={"/hololive.svg"}
          alt="Holo Wiki"
          width={20}
          height={20}
          className="m-2 w-10"
        />
        <div className="flex flex-col items-center text-xl font-bold">
          <span>holo wiki</span>
        </div>
      </Link>
      <div className="mx-2 flex flex-grow items-center justify-end space-x-4">
        <Link href="/wiki" className="flex items-center">
          <span className="text-lg font-bold">Wiki</span>
        </Link>
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
