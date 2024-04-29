"use client";
import { NavigationLinkDetails } from '@/types/common/navigation/navigation';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import React from 'react';
import "./styles.scss";
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface TopNavigationMenuProps {
  navigationDetails: NavigationLinkDetails;
}

// Lazy load Link component
const Link = dynamic(() => import('next/link'));

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
              <NavigationMenuLink aria-description='search bar toggle'  className={`${menuStyling}-link`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={`${menuStyling}-item`}>
            <Link href="/notifications">
              <NavigationMenuLink aria-description='notifications page link' className={`${menuStyling}-link`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={`${menuStyling}-item`}>
            <Link href="/settings">
              <NavigationMenuLink aria-description='settings page link' className={`${menuStyling}-link`}>
              <FontAwesomeIcon icon={faGear} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={`${menuStyling}-item`}>
              <NavigationMenuLink aria-description='dropdown menu' className={`${menuStyling}-link`}>
                <FontAwesomeIcon icon={faBars} />
              </NavigationMenuLink>
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
