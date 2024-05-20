import React from 'react';
import clsx from 'clsx';

interface TestFileProps {
  message: string;
  className?: string;
}

const TestFile: React.FC<TestFileProps> = ({ message, className }) => {
  return (
    <div className={clsx('p-4 bg-gray-100 rounded-md', className)}>
      <p className="text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default TestFile;

