import { Pagination as IPagination } from '../types';
import Link from 'next/link';

export const Pagination = ({ pagination }: { pagination: IPagination }) => {
  const { page, pageCount, pageSize, total } = pagination;

  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevPageUrl = isFirstPage ? '/' : `?page=${prevPage}`;
  const nextPageUrl = isLastPage ? '/' : `?page=${nextPage}`;

  return (
    <div className='flex flex-col items-center'>
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Showing{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {page}
        </span>{' '}
        to{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {pageSize}
        </span>{' '}
        of{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {total}
        </span>{' '}
      </span>
      <div className='inline-flex mt-2 xs:mt-0'>
        <Link
          href={prevPageUrl}
          className={`${
            isFirstPage ? 'pointer-events-none opacity-60' : ''
          } flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Prev
        </Link>
        <Link
          href={nextPageUrl}
          className={`${
            isLastPage ? 'pointer-events-none opacity-60' : ''
          } flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
