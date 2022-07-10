import * as React from 'react';
import cn from 'classnames';

export const IconHint = React.memo<JSX.IntrinsicElements['svg']>(
  function IconHint({className}) {
    return (
      <svg
        className={cn('inline -mt-0.5', className)}
        width="12"
        height="14"
        viewBox="0 0 12 15"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.53487 11H5.21954V7.66665H6.55287V11H7.23754C7.32554 10.1986 7.7342 9.53732 8.39754 8.81532C8.47287 8.73398 8.9522 8.23732 9.00887 8.16665C9.47973 7.5784 9.77486 6.86913 9.86028 6.1205C9.9457 5.37187 9.81794 4.61434 9.4917 3.93514C9.16547 3.25594 8.65402 2.6827 8.01628 2.28143C7.37853 1.88016 6.64041 1.66719 5.88692 1.66703C5.13344 1.66686 4.39523 1.87953 3.75731 2.28052C3.11939 2.68152 2.60771 3.25454 2.28118 3.9336C1.95465 4.61266 1.82656 5.37014 1.91167 6.1188C1.99677 6.86747 2.2916 7.57687 2.7622 8.16532C2.81954 8.23665 3.3002 8.73398 3.3742 8.81465C4.0382 9.53732 4.44687 10.1986 4.53487 11ZM4.55287 12.3333V13H7.21954V12.3333H4.55287ZM1.7222 8.99998C1.09433 8.21551 0.700836 7.26963 0.587047 6.2713C0.473258 5.27296 0.643804 4.26279 1.07904 3.35715C1.51428 2.4515 2.19649 1.68723 3.04711 1.15237C3.89772 0.617512 4.88213 0.333824 5.88692 0.333984C6.89172 0.334145 7.87604 0.61815 8.72648 1.15328C9.57692 1.68841 10.2589 2.4529 10.6938 3.35869C11.1288 4.26447 11.299 5.27469 11.1849 6.27299C11.0708 7.27129 10.677 8.21705 10.0489 9.00132C9.63554 9.51598 8.55287 10.3333 8.55287 11.3333V13C8.55287 13.3536 8.41239 13.6927 8.16235 13.9428C7.9123 14.1928 7.57316 14.3333 7.21954 14.3333H4.55287C4.19925 14.3333 3.86011 14.1928 3.61006 13.9428C3.36001 13.6927 3.21954 13.3536 3.21954 13V11.3333C3.21954 10.3333 2.1362 9.51598 1.7222 8.99998Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

IconHint.displayName = 'IconHint';
