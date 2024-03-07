"use client";
import { Inter } from 'next/font/google'
import styles from "./layout.module.scss";
import { Provider } from 'react-redux';
import { store } from './store';
import TopNavigationMenu from '@/components/common/TopNavigationMenu';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO - Remove these links from state into database config file
  const menuDetails = {
    links: [
      { label: 'home', url: '/' },
      { label: 'dashboard', url: '/dashboard' },
      { label: 'health', url: '/about' },
      { label: 'art', url: '/art' },
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
        </body>
      </Provider>
    </html>
  )
}
