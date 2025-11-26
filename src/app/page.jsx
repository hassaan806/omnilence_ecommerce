import { redirect } from 'next/navigation';

// Redirect root path to dashboard for static export
export default function Home() {
  redirect('/dashboard');
}