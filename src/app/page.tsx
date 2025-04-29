'use client';
// in pages/index.tsx or app/page.tsx
import dynamic from 'next/dynamic';
const ClosetGrid = dynamic(
  () => import('../components/ClosetGrid'),
  { ssr: false }
);

export default function Home() {
  return <ClosetGrid />;
}