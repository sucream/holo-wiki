"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery, useQueryClient, queryOptions } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
// import { useSearchParams } from "next/navigation";

import getSchedules from "../_lib/getSchedule";

type Props = Readonly<{
  selectedGroup: string;
}>;

export default function Schedule({ selectedGroup }: Props) {
  // const searchParams = useSearchParams();
  // const group = searchParams.get("group"); // 쿼리 파라미터에서 group 값을 가져옴

  const groupOptions = (group: string = "1") => {
    return queryOptions({
      queryKey: ["schedule", group],
      queryFn: () => getSchedules(group),
      staleTime: 30 * 60 * 1000,
    });
  };

  // Queries
  const query = useQuery(groupOptions(selectedGroup ?? "1"));

  const getToday = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${month}.${day}`;
  };

  return (
    <div>
      <div className="flex w-full justify-end">
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search"
            className="w-40 rounded-lg bg-cyan-200 p-2 shadow-md"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="cursor-pointer rounded-full bg-cyan-200 p-1 text-cyan-500"
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
            />
          </svg>
        </div>
      </div>
      {query.isLoading && (
        <div className="m-4 space-y-5">
          <Skeleton className="h-4 w-[250px]" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[...Array(20)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      )}
      {/* {query.data?.map((dateGroup, idx) => (
        <div key={idx} className="mb-10 space-y-5">
          <div className="m-4 flex justify-start ">
            <h3 className="text-2xl font-bold">{dateGroup.displayDate}</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {dateGroup.videoList.map((video) => (
              <div
                key={video.url}
                className="flex flex-col justify-start space-y-3 rounded-xl bg-cyan-100 p-3 shadow-md"
              >
                <Link href={video.url} target="_blank">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={500}
                    height={500}
                    className="w-full rounded-xl"
                  />
                </Link>
                <div className="flex flex-row">
                  <div className="relative mr-2 items-start">
                    <Image
                      src={video.talent.iconImageUrl}
                      alt={video.talent.name}
                      width={30}
                      height={30}
                      className={cn(
                        "w-8 rounded-full",
                        video.isLive && "ring-2 ring-red-500",
                      )}
                    />
                    {video.isLive && (
                      <div className="absolute -right-2 bottom-0 rounded-md bg-red-600 px-1 text-[6px] text-white">
                        Live
                      </div>
                    )}
                  </div>
                  <div className="flex-1 cursor-default">
                    <p
                      title={video.title}
                      // className="line-clamp-2 text-sm font-medium"
                      className="line-clamp-1 text-sm font-medium"
                    >
                      {video.title}
                    </p>
                    <div className="flex flex-row items-center">
                      <span className="text-xs">{video.talent.name}</span>
                      <span className="text-xs">{video.datetime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Separator />
        </div>
      ))} */}
      {query.data?.length !== 0 && (
        <div>
          <Accordion type="single" collapsible defaultValue={getToday()}>
            {query.data?.map((dateGroup, idx) => (
              <AccordionItem key={idx} value={dateGroup.displayDate}>
                <AccordionTrigger>{dateGroup.displayDate}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {dateGroup.videoList.map((video) => (
                      <div
                        key={video.url}
                        className={cn(
                          "flex flex-col justify-start space-y-3 rounded-xl p-3 shadow-md",
                          video.isLive ? "bg-red-500" : "bg-cyan-100",
                        )}
                      >
                        <Link href={video.url} target="_blank">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={500}
                            height={500}
                            priority
                            className="w-full rounded-xl"
                          />
                        </Link>
                        <div className="flex flex-row">
                          <div className="relative mr-2 items-start">
                            <Image
                              src={video.talent.iconImageUrl}
                              alt={video.talent.name}
                              width={30}
                              height={30}
                              priority
                              className={cn(
                                "w-8 rounded-full",
                                video.isLive && "ring-2 ring-red-500",
                              )}
                            />
                            {video.isLive && (
                              <span className="absolute -bottom-1 rounded-md bg-red-600 px-1 py-0 text-center text-xs font-thin text-white">
                                Live
                              </span>
                            )}
                          </div>
                          <div className="flex-1 cursor-default">
                            <p
                              title={video.title}
                              // className="line-clamp-2 text-sm font-medium"
                              className="line-clamp-1 text-sm font-medium"
                            >
                              {video.title}
                            </p>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-semibold">
                                {video.talent.name}
                              </span>
                              <span className="text-xs">{video.datetime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}
