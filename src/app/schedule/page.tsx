import Talent from "./_components/Talent";

export default function NewSchedulePage() {
  const talentList = [
    {
      groupName: "Hololive",
      representTalentImageUrl: "/top_talents_hololive.png",
      groupImageUrl: "/hololive_japan_logo.png",
      scheduleUrl: "/schedule/2",
    },
    {
      groupName: "Hololive Indonesia",
      representTalentImageUrl: "/top_talents_hololive_id.png",
      groupImageUrl: "/hololive_indonesia_logo.png",
      scheduleUrl: "/schedule/6",
    },
    {
      groupName: "Hololive English",
      representTalentImageUrl: "/top_talents_hololive_en.png",
      groupImageUrl: "/hololive_english_logo.png",
      scheduleUrl: "/schedule/8",
    },
    {
      groupName: "Holostars",
      representTalentImageUrl: "/top_talents_holostars.png",
      groupImageUrl: "/holostars_japan_logo.png",
      scheduleUrl: "/schedule/3",
    },
    {
      groupName: "Holostars English",
      representTalentImageUrl: "/top_talents_holostars_en.png",
      groupImageUrl: "/holostars_english_logo.png",
      scheduleUrl: "/schedule/9",
    },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full overflow-hidden whitespace-nowrap bg-[#E4E4E4] text-xl font-bold text-white">
        <div className="animate-marquee inline-block">
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
        </div>
        <div className="animate-marquee inline-block">
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
          <span className="mr-8 inline-block">HOLOLIVE Production Talent</span>
        </div>
      </div>
      {talentList.map((talent) => (
        <Talent
          key={talent.groupName}
          groupName={talent.groupName}
          representTalentImageUrl={talent.representTalentImageUrl}
          groupImageUrl={talent.groupImageUrl}
          scheduleUrl={talent.scheduleUrl}
        />
      ))}
    </div>
  );
}
