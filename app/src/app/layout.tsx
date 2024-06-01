"use client";
import { Inter } from 'next/font/google'
import styles from "./layout.module.scss";
import { Provider } from 'react-redux';
import { store } from './store';
import TopNavigationMenu from '@/components/common/TopNavigationMenu/TopNavigationMenu';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO - Remove these links from state into database config file
  const menuDetails = {
    links: [
      { label: 'HOME', url: '/' },
      { label: 'DASHBOARD', url: '/dashboard' },
      { label: 'HEALTH', url: '/about' },
      { label: 'ART', url: '/art' },
    ],
    isSettingsEnabled: true,
    isLogoutEnabled: false,
    isLogoPresent: true,
    isMainMenu: true,
  }

  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${inter.className} ${styles.application}`} >
              <TopNavigationMenu navigationDetails={menuDetails} />
                {children}
                <Toaster />
        </body>
      </Provider>
    </html>
  )
}
