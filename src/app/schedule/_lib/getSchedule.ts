export type Talent = {
  name: string;
  iconImageUrl: string;
};

export type Video = {
  isLive: boolean;
  url: string;
  thumbnail: string;
  title: string;
  talent: Talent;
  collaboTalents: Talent[];
  datetime: string;
};
export type DateGroup = {
  displayDate: string;
  datetime: string;
  videoList: Video[];
};

// 스케줄 가져오기
export default async function getSchedules(group: string | null = "1") {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SCHEDULE_API_URL}/${group}`,
  );
  const data: { dateGroupList: DateGroup[] } = await res.json();
  console.log(data);

  return data.dateGroupList;
}
