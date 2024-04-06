import { redirect } from "next/navigation";
import CustomMDX from "@/app/wiki/_components/WikiComponent";

type Prams = Readonly<{
  content: string;
}>;

type WikiContent = Readonly<{
  title: string;
  content: string;
}>;

async function getWikiContent(wikiItem: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wiki/${wikiItem}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: WikiContent = await res.json();
  return data;
}

export default async function WikiDetailPage({ params }: { params: Prams }) {
  let wikiItem: WikiContent | null = null;
  try {
    wikiItem = await getWikiContent(params.content);
  } catch (error) {
    console.error(error);
    redirect("/wiki/error");
  }
  return (
    <div className="mb-4 flex h-full flex-row justify-between">
      <nav></nav>
      <div className="max-w-[60vw] bg-slate-50 p-4">
        <CustomMDX source={wikiItem.content} className="flex-1" />
      </div>
      <div></div>
    </div>
  );
}
