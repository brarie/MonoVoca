import { DashboardHeader } from '@/src/app/dashboard/_components/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">{children}</div>
      </main>
    </div>
  );
}
