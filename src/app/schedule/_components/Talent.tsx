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
      className="group flex h-60 w-full flex-col items-center border-b-2 border-neutral-400 py-2 duration-300 hover:bg-[#f4fdff] lg:h-40 lg:flex-row lg:justify-evenly lg:px-40 lg:hover:h-96"
    >
      <div className="group relative h-40 w-60 lg:-z-10 lg:overflow-y-hidden lg:overflow-x-clip lg:group-hover:z-10 lg:group-hover:h-64 lg:group-hover:w-96 lg:group-hover:overflow-visible">
        <Image
          src={representTalentImageUrl}
          alt={groupName}
          // fill
          width={450}
          height={300}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="duration-300 lg:h-full lg:overflow-y-hidden lg:transition-all lg:group-hover:h-full lg:group-hover:w-full lg:group-hover:translate-x-40 lg:group-hover:scale-150"
        />
      </div>
      <div className="relative w-56">
        <Image
          src={groupImageUrl}
          alt={groupName}
          width={400}
          height={200}
          priority
          className="duration-300 lg:scale-125 lg:group-hover:scale-[2] "
        />
      </div>
      {/* <p>More</p> */}
    </Link>
  );
}
