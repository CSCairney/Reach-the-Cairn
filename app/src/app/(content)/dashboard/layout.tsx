import TopNavigationMenu from "@/components/common/TopNavigationMenu";
import styles from "./styles.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuDetails = {
    links: [
      { label: 'details', url: '/details' },
      { label: 'mailing', url: '/mailing' },
      { label: 'privacy', url: '/privacy' },
    ],
    isSettingsEnabled: false,
    isLogoutEnabled: false,
    isLogoPresent: false,
    isMainMenu: false,
  
  }
  return (
    <div className={styles.dashboard}>
      <TopNavigationMenu navigationDetails={menuDetails} />
      <div>{children}</div>
    </div>
  );
}