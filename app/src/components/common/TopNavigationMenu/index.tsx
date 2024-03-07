"use client";
import { NavigationLinkDetails } from '@/types/common/navigation/navigation';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import React from 'react';
import Link from 'next/link';
import "./styles.scss";

interface TopNavigationMenuProps {
  navigationDetails: NavigationLinkDetails;
}

const TopNavigationMenu: React.FC<TopNavigationMenuProps> = ({ navigationDetails }) => {
  const { links, isSettingsEnabled, isLogoutEnabled, isLogoPresent, isMainMenu } = navigationDetails;
  const menuStyling = isMainMenu ? 'main-navigation-menu' : 'top-navigation-menu';

  return (
    <NavigationMenu className={menuStyling}>
      <div className={`${menuStyling}__pages`}>
        {links.map((link, index) => (
          <NavigationMenuItem key={index} className={`${menuStyling}-item`}>
            <Link href={link.url}>
              <NavigationMenuLink className={`${menuStyling}-link`}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </div>
      {isLogoPresent && (
        <div className={`${menuStyling}__logo`}>
          <p>Reach the Cairn</p>
        </div>
      )}
      <div className={`${menuStyling}__account`}>
      {isSettingsEnabled && (
        <div className={`${menuStyling}__settings`}>
          <NavigationMenuItem className={`${menuStyling}-item`}>
            <Link href="/settings">
              <NavigationMenuLink className={`${menuStyling}-link`}>
                Settings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      )}

      {isLogoutEnabled && (
        <div className={`${menuStyling}__logout`}>
          <NavigationMenuItem className={`${menuStyling}-item`}>
            <Link href="/logout">
              <NavigationMenuLink className={`${menuStyling}-link`}>
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      )}
      </div>
    </NavigationMenu>
  );
};

export default TopNavigationMenu;
