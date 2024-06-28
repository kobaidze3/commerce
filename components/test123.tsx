import clsx from 'clsx';

const Test123 = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('p-4 bg-gray-100 dark:bg-gray-800 rounded-lg', className)}>
      <h1 className="text-2xl font-bold text-center text-black dark:text-white">Test123 Component</h1>
      <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
        This is a placeholder for the Test123 component.
      </p>
    </div>
  );
};

export default Test123;

