import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const AsyncSpinner: React.FC = () => {
  const spinnerState = useSelector((state: RootState) => state.spinner.asyncSpinner);
  return <LoadingSpinner visible={spinnerState.visible} />;
};

export default AsyncSpinner;