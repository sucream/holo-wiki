"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const groupList = [
//   { name: "HOLOLIVE-ALL", group: "7", imagePath: "" },
//   { name: "HOLOSTARS-ALL", group: "10", imagePath: "" },
//   {
//     name: "HOLOLIVE-JP",
//     group: "2",
//     imagePath: "/hololive_japan_members.webp",
//   },
//   { name: "HOLOSTARS-JP", group: "3", imagePath: "" },
//   {
//     name: "HOLOLIVE-EN",
//     group: "8",
//     imagePath: "/hololive_english_members.jpg",
//   },
//   { name: "HOLOSTARS-EN", group: "9", imagePath: "" },
//   {
//     name: "HOLOLIVE-ID",
//     group: "6",
//     imagePath: "/hololive_indonesia_members.jpeg",
//   },
// ];

const groupList = [
  {
    groupName: "HOLOLIVE-ALL",
    group: "7",
    logoPath: "/hololive_production_logo.png",
    imagePath: "/hololive_production_logo.png",
    moreInfoPath: "https://hololive.hololivepro.com/en/talents",
    content:
      "Hololive Production (ホロライブプロダクション, stylized as hololive production), or Hololive (ホロライブ, stylized as hololive) for short, is a Virtual YouTuber agency established by COVER corp.. Initially known for their female-only VTuber group, it merged with Holostars, their male-only VTuber group, and INoNaKa Music, their music label, to form Hololive Production on December 2, 2019.",
  },
  {
    groupName: "HOLOSTARS-ALL",
    group: "10",
    logoPath: "/holostars_japan_logo.png",
    imagePath: "/holostars_japan_logo.png",
    moreInfoPath: "https://holostars.hololivepro.com/en/talent",
    content:
      "Holostars (ホロスターズ), is a male-only Virtual YouTuber agency established by Cover Corp. Auditions for the first batch began on May 27, 2019, and the group initially debuted with 3 members. On December 2, 2019, Holostars merged with the main Hololive branch and INoNaKa Music, their music label, to form Hololive Production.",
  },
  {
    groupName: "Hololive Japan",
    group: "2",
    logoPath: "/hololive_japan_logo.png",
    imagePath: "/hololive_japan_logo.png",
    moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=hololive",
    content:
      "Hololive Japan, often referred to simply as Hololive (ホロライブ, stylized as hololive) for short, is an all-girl Virtual YouTuber group under COVER Corporation aimed at the Japanese-speaking audience. Initially known for their female-only VTuber group, it merged with Holostars, their male-only VTuber group, and INoNaKa Music, their music label, to become part of the Hololive Production umbrella on December 2, 2019.",
  },
  {
    groupName: "Hololive English",
    group: "8",
    logoPath: "/hololive_english_logo.png",
    imagePath: "/hololive_english_logo.png",
    moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=english",
    content:
      "Hololive English (ホロライブEnglish, stylized as hololive English) is an all-girl VTuber group under COVER Corporation aimed at the English-speaking audience. Their activities include live streaming on platforms such as YouTube and interacting with fans on Twitter. The talents perform using intricate 2D avatars provided by the company. Unlike the Japanese and Indonesian branches, Hololive English does not name their groups by numbered generations to maintain fairness and avoid developing preconceptions about the prioritizing of the groups based on their numbers. Among fans, however, Myth, Promise (formerly Council and Project:HOPE), and Advent are commonly informally referred to as generations 1, 2, and 3 respectively.",
  },
  {
    groupName: "Hololive Indonesia",
    group: "6",
    logoPath: "/hololive_indonesia_logo.png",
    imagePath: "/hololive_indonesia_logo.png",
    moreInfoPath: "https://hololive.hololivepro.com/en/talents?gp=indonesia",
    content:
      "Hololive Indonesia (ホロライブインドネシア, stylized as hololive Indonesia) is Hololive's branch in Indonesia.",
  },
];

export default function AutoSwiper() {
  return (
    <div className="w-full">
      <Swiper
        // cssMode={true}
        freeMode={true}
        className="h-full ease-linear"
        loop={true}
        autoplay={{ delay: 5000 }}
        speed={3000}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          // when window width is >= 640px
          // 640: {
          //   slidesPerView: 1,
          //   spaceBetween: 20,
          // },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
        }}
        //   pagination={{ clickable: true }}
      >
        {/* {groupList.map((group, i) => (
          <SwiperSlide key={i}>
            <div key={i} className="rounded-md bg-cyan-100">
              <Link
                href={`/schedule/${group.group}`}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={group.imagePath}
                  alt={group.name}
                  width={300}
                  height={300}
                  className=""
                ></Image>
                <span>{group.name}</span>
              </Link>
            </div>
          </SwiperSlide>
        ))} */}
        {groupList.map((group, i) => (
          <SwiperSlide key={i} className="mb-6 lg:mb-0">
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
                    className="h-full w-full"
                  />
                  <Link
                    href={`/schedule/${group.group}`}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">{group.groupName}</h5>
                <p className="mb-4 pb-2">{group.content}</p>
                <Link
                  href={group.moreInfoPath}
                  target="_blank"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
