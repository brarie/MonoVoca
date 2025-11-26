import { Header } from '@/components/Header';
import { ParticlesBackground } from '@/components/ParticlesBackground';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative z-10">{children}</div>
      <ParticlesBackground />
    </div>
  );
}
