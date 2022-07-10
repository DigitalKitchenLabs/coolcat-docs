import * as React from 'react';
import ButtonLink from 'components/ButtonLink';
import {IconNavArrow} from 'components/Icon/IconNavArrow';

interface YouWillLearnCardProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

function YouWillLearnCard({title, path, children}: YouWillLearnCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
      className="flex flex-col h-full shadow-inner justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3">
      <div>
        <h4 className="text-primary dark:text-primary-dark font-bold text-2xl leading-tight">
          {title}
        </h4>
        <div className="my-4">{children}</div>
      </div>
      <div>
        <ButtonLink
          href={path}
          className="mt-1"
          type="primary"
          size="md"
          label={title}>
          Read More
          <IconNavArrow displayDirection="right" className="inline ml-1" />
        </ButtonLink>
      </div>
    </div>
  );
}

export default YouWillLearnCard;
