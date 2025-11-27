import { DashboardHeader } from '@/src/app/dashboard/_components/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="pt-32 px-6">{children}</main>
    </div>
  );
}
