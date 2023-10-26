/* eslint-disable react/no-children-prop */
import Image from "next/image";
import DashNav from "./components/DashNav";
import Dashboard from "./dashboard/page";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
  return (
    <DashboardLayout>
      <Dashboard/>
    </DashboardLayout>
  );
}
