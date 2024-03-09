"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="m-2 text-5xl font-semibold">- Not Found -</h2>
      <Image src={"/not-found.png"} alt="Not Found" width={300} height={300} />
      <p
        onClick={() => router.replace("/")}
        className="rounded-md bg-cyan-400 p-4 hover:cursor-pointer hover:bg-cyan-500"
      >
        돌아가기
      </p>
    </div>
  );
}
