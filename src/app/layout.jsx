import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import NextTopLoader from 'nextjs-toploader';
import '@/assets/scss/app.scss';
import { DEFAULT_PAGE_TITLE } from '@/context/constants';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});
export const metadata = {
  title: {
    template: '%s | Omnilence Nextjs - Responsive Admin Dashboard Template',
    default: DEFAULT_PAGE_TITLE
  },
  description: 'Bootstrap 5 based Responsive Admin Dashboard'
};
const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;
export default function RootLayout({
  children
}) {
  return <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={inter.className}>
        <div id="splash-screen">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image alt="Omnilence Logo" width={28} height={24} src="/logo.png" priority />
          <span style={{ fontSize: '28px', fontWeight: '700', color: '#343A40' }}>Omnilence</span>
        </div>
        </div>
        <NextTopLoader color="#ff6c2f" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </div>
      </body>
    </html>;
}