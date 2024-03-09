"use client";

import Link from "next/link";
import { useState } from "react";
import cn from "classnames";

export default function Sidebar() {
  const [group, setGroup] = useState(1);

  const linkList = [
    { name: "ALL", href: "/schedule?group=1", group: 1 },
    { name: "HOLOLIVE-ALL", href: "/schedule?group=7", group: 7 },
    { name: "HOLOSTARS-ALL", href: "/schedule?group=10", group: 10 },
    { name: "HOLOLIVE-JP", href: "/schedule?group=2", group: 2 },
    { name: "HOLOSTARS-JP", href: "/schedule?group=3", group: 3 },
    { name: "HOLOLIVE-EN", href: "/schedule?group=8", group: 8 },
    { name: "HOLOSTARS-EN", href: "/schedule?group=9", group: 9 },
    { name: "HOLOLIVE-ID", href: "/schedule?group=6", group: 6 },
  ];
  return (
    // <div className="m-2 h-full w-full max-w-[200px] rounded-lg bg-[#46c3f2]">
    <div className="hidden md:m-2 md:block md:h-full md:w-full md:max-w-[200px] md:rounded-lg md:text-black ">
      {linkList.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          onClick={() => setGroup(link.group)}
          className={cn(
            "block p-2",
            group === link.group && "rounded-lg bg-orange-300",
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
