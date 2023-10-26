import DashNav from "../components/DashNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashNav name={""} />
      {children}
    </section>
  );
}
