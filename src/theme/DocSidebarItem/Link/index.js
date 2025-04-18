import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/lib/client/docsUtils.js';
export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  svg,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {item?.customProps?.icon && <i className={`ri-${item.customProps.icon}`} style={{ paddingInlineEnd: "8px", width: "16.11px", height: "16.16px", inlineSize: "inherit" }} />}
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
