import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const queryClient = useQueryClient();

  // Queries
  // const { data, isLoading, isError } = useQuery({ queryKey: ['schedule'], queryFn: getSchedules });

  const groupList = [
    {
      groupName: "Hololive Japan",
      logoPath: "/hololive_production.png",
      imagePath: "/hololive_japan_members.webp",
      moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=hololive",
      content:
        "Hololive Japan, often referred to simply as Hololive (ホロライブ, stylized as hololive) for short, is an all-girl Virtual YouTuber group under COVER Corporation aimed at the Japanese-speaking audience. Initially known for their female-only VTuber group, it merged with Holostars, their male-only VTuber group, and INoNaKa Music, their music label, to become part of the Hololive Production umbrella on December 2, 2019.",
    },
    {
      groupName: "Hololive English",
      logoPath: "/hololive_English.png",
      imagePath: "/hololive_english_members.jpg",
      moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=english",
      content:
        "Hololive English (ホロライブEnglish, stylized as hololive English) is an all-girl VTuber group under COVER Corporation aimed at the English-speaking audience. Their activities include live streaming on platforms such as YouTube and interacting with fans on Twitter. The talents perform using intricate 2D avatars provided by the company. Unlike the Japanese and Indonesian branches, Hololive English does not name their groups by numbered generations to maintain fairness and avoid developing preconceptions about the prioritizing of the groups based on their numbers. Among fans, however, Myth, Promise (formerly Council and Project:HOPE), and Advent are commonly informally referred to as generations 1, 2, and 3 respectively.",
    },
    {
      groupName: "Hololive Indonesia",
      logoPath: "/hololive_Indonesia.png",
      imagePath: "/hololive_indonesia_members.jpeg",
      moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=indonesia",
      content:
        "Hololive Indonesia (ホロライブインドネシア, stylized as hololive Indonesia) is Hololive's branch in Indonesia.",
    },
  ];

  return (
    <div>
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Hololive Production
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {groupList.map((group, i) => (
            <div key={i} className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div
                    className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <Image
                      src={group.imagePath}
                      alt={group.groupName}
                      width={400}
                      height={250}
                      className="w-full"
                    />
                    <Link href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">{group.groupName}</h5>
                  {/* <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>
                      Published <u>13.01.2022</u> by
                      <a href="#!">Anna Maria Doe</a>
                    </small>
                  </p> */}
                  <p className="mb-4 pb-2">{group.content}</p>
                  <Link
                    href={group.moreInfoPath}
                    target="_blank"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
