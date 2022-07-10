import * as React from 'react';
import cn from 'classnames';
import {RouteItem} from 'components/Layout/useRouteMeta';
import {useRouter} from 'next/router';
import {SidebarRouteTree} from '../Sidebar';
import sidebarHome from '../../../sidebarHome.json';
import sidebarBuild from '../../../sidebarBuild.json';

function inferSection(pathname: string): 'build' | 'posts' | 'home' {
  if (pathname.startsWith('/build')) {
    return 'build';
  } else if (pathname.startsWith('/blog')) {
    return 'posts';
  } else {
    return 'home';
  }
}

export function MobileNav() {
  const {pathname} = useRouter();
  const [section, setSection] = React.useState(() => inferSection(pathname));

  let tree = null;
  switch (section) {
    case 'home':
      tree = sidebarHome.routes[0];
      break;
    case 'build':
      tree = sidebarBuild.routes[0];
      break;
    case 'posts':
      tree = sidebarBuild.routes[0];
      break;
  }

  return (
    <>
      <div className="sticky top-0 px-5 mb-2 bg-wash dark:bg-wash-dark flex justify-end border-b border-border dark:border-border-dark items-center self-center w-full z-10">
        <TabButton
          isActive={section === 'home'}
          onClick={() => setSection('home')}>
          Home
        </TabButton>
        <TabButton
          isActive={section === 'build'}
          onClick={() => setSection('build')}>
          Build
        </TabButton>
        <TabButton
          isActive={section === 'posts'}
          onClick={() => setSection('posts')}>
          Posts
        </TabButton>
      </div>
      {/* No fallback UI so need to be careful not to suspend directly inside. */}
      <React.Suspense fallback={null}>
        <SidebarRouteTree routeTree={tree as RouteItem} isMobile={true} />
      </React.Suspense>
    </>
  );
}

function TabButton({
  children,
  onClick,
  isActive,
}: {
  children: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive: boolean;
}) {
  const classes = cn(
    'inline-flex items-center w-full border-b-2 justify-center text-base leading-9 px-3 py-0.5 hover:text-link hover:gray-5',
    {
      'text-link dark:text-link-dark dark:border-link-dark border-link font-bold':
        isActive,
      'border-transparent': !isActive,
    }
  );
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
