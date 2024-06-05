import React from 'react';
import clsx from 'clsx';

interface Test123Props {
  title: string;
  description: string;
  isActive: boolean;
}

const Test123: React.FC<Test123Props> = ({ title, description, isActive }) => {
  return (
    <div className={clsx('p-4 rounded-lg', { 'bg-blue-600 text-white': isActive, 'bg-gray-200 text-black': !isActive })}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Test123;

