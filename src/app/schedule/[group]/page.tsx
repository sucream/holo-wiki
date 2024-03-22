import Schedule from "./_components/Schedule";
import Sidebar from "./_components/Sidebar";
// import { Suspense } from "react";

type Prams = Readonly<{
  group: string;
}>;

export default function ScheduleDetailPage({ params }: { params: Prams }) {
  return (
    <div className="mb-4 flex h-full flex-1 flex-col lg:flex-row">
      <Sidebar selectedGroup={params.group} />
      <div className="flex-1 p-4 ">
        <h1 className="text-center text-2xl font-extrabold">Schedule</h1>
        <Schedule selectedGroup={params.group} />
      </div>
    </div>
  );
}
