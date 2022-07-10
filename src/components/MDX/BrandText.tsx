import React from 'react';

export interface IntroProps {
  children?: React.ReactNode;
}

function BrandText({children}: IntroProps) {
  return (
    <div className="text-xl text-link dark:text-link leading-relaxed">
      {children}
    </div>
  );
}

BrandText.displayName = 'BrandText';

export default BrandText;
