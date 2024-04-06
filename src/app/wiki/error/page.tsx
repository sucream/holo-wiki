"use client";

import { useRouter } from "next/navigation";

export default function WikiErrorPage() {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>Wiki Error Page</h1>
      <button
        className="rounded-md bg-cyan-400 p-2"
        onClick={() => router.back()}
      >
        이전 페이지로 돌아가기
      </button>
    </div>
  );
}
