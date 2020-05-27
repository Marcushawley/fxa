import React from 'react';
import { ReactComponent as Spinner } from './spinner.svg';
import './index.scss';

export const LoadingSpinner = ({ className = '' }: { className?: string }) => (
  <div {...{ className }} data-testid="loading-spinner">
    <Spinner className="spinner-image" role="img" aria-label="Loading..." />
  </div>
);

export default LoadingSpinner;
