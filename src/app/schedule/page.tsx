// import { Suspense } from "react";
import Schedule from "./_components/Schedule";
import { Suspense } from "react";

export default function SchedulePage() {
  return (
    <div>
      <h1>Holo Schedule</h1>
      <Suspense>
        <Schedule />
      </Suspense>
    </div>
  );
}
