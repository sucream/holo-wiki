import Sidebar from "./_components/Sidebar";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function ScheduleLayout(props: Props) {
  return (
    <div className="mb-4 flex h-full flex-1 flex-row">
      <Sidebar />
      <div className="flex-1 p-4 ">{props.children}</div>
    </div>
  );
}
