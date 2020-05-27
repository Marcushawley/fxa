import React from 'react';
import { ReactComponent as Spinner } from './spinner.svg';

export const LoadingSpinner = ({
  className = '',
  svgClassName = '',
}: {
  className?: string;
  svgClassName?: string;
}) => (
  <div {...{ className }} data-testid="loading-spinner">
    <Spinner
      className={`${svgClassName} spinner-image`}
      role="img"
      aria-label="Loading..."
    />
  </div>
);

export default LoadingSpinner;
