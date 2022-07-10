import * as React from 'react';
import {MarkdownPage, MarkdownProps} from './MarkdownPage';
import {RouteItem} from 'components/Layout/useRouteMeta';
import {Page} from './Page';
import sidebarBuild from '../../sidebarBuild.json';
interface PageFrontmatter {
  title: string;
}

export default function withBuild(meta: PageFrontmatter) {
  function LayoutBuild(props: MarkdownProps<PageFrontmatter>) {
    return <MarkdownPage {...props} meta={meta} />;
  }
  LayoutBuild.appShell = AppShell;
  return LayoutBuild;
}

function AppShell(props: {children: React.ReactNode}) {
  return <Page {...props} routeTree={sidebarBuild as RouteItem} />;
}
