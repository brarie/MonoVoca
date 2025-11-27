import { ParticlesBackground } from '@/src/app/(main)/_components/ParticlesBackground';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
      <ParticlesBackground />
    </div>
  );
}
