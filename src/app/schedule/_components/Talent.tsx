import Image from "next/image";
import Link from "next/link";

type Props = Readonly<{
  groupName: string;
  representTalentImageUrl: string;
  groupImageUrl: string;
  scheduleUrl: string;
}>;

export default function Talent({
  groupName,
  representTalentImageUrl,
  groupImageUrl,
  scheduleUrl,
}: Props) {
  return (
    <Link
      href={scheduleUrl}
      className="group flex h-40 w-full items-center justify-around border-b-2 border-neutral-400 px-40 py-2 duration-300 hover:h-96 hover:bg-[#f4fdff]"
    >
      <div className="group relative -z-10 h-40 w-60 overflow-y-hidden overflow-x-clip group-hover:z-10 group-hover:h-64 group-hover:w-96 group-hover:overflow-visible">
        <Image
          src={representTalentImageUrl}
          alt={groupName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="overflow-y-hidden transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:translate-x-40 group-hover:scale-150"
        />
      </div>
      <div className="relative w-56">
        <Image
          src={groupImageUrl}
          alt={groupName}
          width={800}
          height={600}
          priority
          className="scale-125 duration-300 group-hover:scale-[2]"
        />
      </div>
      {/* <p>More</p> */}
    </Link>
  );
}
