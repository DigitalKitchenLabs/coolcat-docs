import * as React from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import {ExternalLink} from 'components/ExternalLink';
import {IconFacebookCircle} from 'components/Icon/IconFacebookCircle';
import {IconTwitter} from 'components/Icon/IconTwitter';

export function Footer() {
  const socialLinkClasses = 'hover:text-primary dark:text-primary-dark';
  return (
    <>
      <div className="self-stretch w-full sm:pl-0 lg:pl-80 sm:pr-0 2xl:pr-80 pl-0 pr-0">
        <div className="mx-auto w-full px-5 sm:px-12 md:px-12 pt-10 md:pt-12 lg:pt-10">
          <hr className="max-w-7xl mx-auto border-border dark:border-border-dark" />
        </div>
        <footer className="text-secondary dark:text-secondary-dark py-12 px-5 sm:px-12 md:px-12 sm:py-12 md:py-16 lg:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 max-w-7xl mx-auto ">
            <div className="flex flex-col">
              <FooterLink href="/" isHeader={true}>
                Home
              </FooterLink>
              <FooterLink href="/">Features</FooterLink>
              <FooterLink href="/tech">Technology</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/brand">Brand</FooterLink>
            </div>
            <div className="flex flex-col">
              <FooterLink href="/build" isHeader={true}>
                Build
              </FooterLink>
              <FooterLink href="/build/setup/getting-started">
                Getting Started
              </FooterLink>
              <FooterLink href="/build/setup/testnet">Join Testnet</FooterLink>
              <FooterLink href="/build/setup/mainnet">Join Mainnet</FooterLink>
            </div>
            <div className="flex flex-col sm:col-start-2 xl:col-start-4">
              <FooterLink href="/blog" isHeader={true}>
                Blog
              </FooterLink>
              <FooterLink href="/blog">Recent Posts</FooterLink>
            </div>
            <div className="flex flex-col">
              <FooterLink isHeader={true}>More</FooterLink>
              <FooterLink href="https://t.me/coolcatcommunity">
                Telegram
              </FooterLink>
              <FooterLink href="https://discord.gg/mnyvNG9ejf">
                Discord
              </FooterLink>
              <FooterLink href="https://twitter.com/CoolCatChain">
                Twitter
              </FooterLink>
              <FooterLink href="https://coolcat.space">Website</FooterLink>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = cn('border-b inline-block border-transparent', {
    'text-sm text-primary dark:text-primary-dark': !isHeader,
    'text-md text-secondary dark:text-secondary-dark my-2 font-bold': isHeader,
    'hover:border-gray-10': href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  if (href.startsWith('https://')) {
    return (
      <div>
        <ExternalLink href={href} className={classes}>
          {children}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div>
      <NextLink href={href}>
        <a className={classes}>{children}</a>
      </NextLink>
    </div>
  );
}
