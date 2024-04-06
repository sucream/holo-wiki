import Link from "next/link";
import Image from "next/image";

type MemberInfo = Readonly<{
  groupName: string;
  groupMembers: {
    name: string;
    image: string;
    link: string;
  }[];
}>;

type WikiMainContent = Readonly<{
  memberInfo: MemberInfo[];
  randomItems: {
    title: string;
    link: string;
  }[];
}>;

async function getWikiMainContent() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wiki`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch");
    return {} as WikiMainContent;
  }
  const wikiList: WikiMainContent = await res.json();
  return wikiList;
}

export default async function WikiMainPage() {
  const wikiMainContent = await getWikiMainContent();
  return (
    <div>
      {/* <h1>Wiki Main Page</h1> */}
      <div className="flex flex-col items-center">
        {wikiMainContent?.memberInfo.map((group, idx) => (
          <div key={idx} className="mb-2 max-w-96">
            <div className="border border-black text-center font-bold">
              {group.groupName}
            </div>
            <ul className="flex flex-row border border-black p-2">
              {group.groupMembers.map((member, idx) => (
                <li key={idx}>
                  <Link href={member.link}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
