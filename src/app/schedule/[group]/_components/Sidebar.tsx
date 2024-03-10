"use client";

import Link from "next/link";
import { useState } from "react";
import cn from "classnames";

type Props = Readonly<{
  selectedGroup: string;
}>;

export default function Sidebar({ selectedGroup }: Props) {
  const [group, setGroup] = useState(selectedGroup);

  console.log("group", group);

  const linkList = [
    { name: "ALL", href: "/schedule/1", group: "1" },
    { name: "HOLOLIVE-ALL", href: "/schedule/7", group: "7" },
    { name: "HOLOSTARS-ALL", href: "/schedule/10", group: "10" },
    { name: "HOLOLIVE-JP", href: "/schedule/2", group: "2" },
    { name: "HOLOSTARS-JP", href: "/schedule/3", group: "3" },
    { name: "HOLOLIVE-EN", href: "/schedule/8", group: "8" },
    { name: "HOLOSTARS-EN", href: "/schedule/9", group: "9" },
    { name: "HOLOLIVE-ID", href: "/schedule/6", group: "6" },
  ];
  return (
    // <div className="m-2 h-full w-full max-w-[200px] rounded-lg bg-[#46c3f2]">
    <div className="md:rounded-lg md:text-black lg:m-2 lg:h-full lg:w-full lg:max-w-[200px] ">
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
