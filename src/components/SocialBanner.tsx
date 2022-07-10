import React from 'react';
import {ExternalLink} from './ExternalLink';

// TODO: Unify with the old site settings.
// Turning this off also requires changing the Page top value to pull up the sidebar.
const bannerText = 'CoolCat Mainnet is coming. Be ready.';
const bannerLink = 'https://twitter.com/CoolCatChain';
const bannerLinkText = 'Tweet about it!';

export default function SocialBanner() {
  return (
    <div className="w-full bg-gradient-to-r dark:text-primary-dark text-white dark:from-indigo-900  dark:via-purple-900 dark:to-pink-900 from-indigo-500 via-purple-600 to-pink-600 fixed py-2 h-16 sm:h-10 sm:py-0 flex items-center justify-center flex-col sm:flex-row z-[100]">
      {bannerText}
      <ExternalLink
        className="ml-0 sm:ml-1 text-link dark:text-link-dark hover:underline"
        href={bannerLink}>
        {bannerLinkText}
      </ExternalLink>
    </div>
  );
}
