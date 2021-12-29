import { useRouter } from "next/router";
import Link from 'next/link';
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/solid';

function PaginationButtons({maxResults}) {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className='flex max-w-lg justify-between text-blue-700 mb-10'>
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
            <ChevronLeftIcon className='h-5'/>
            <p>Previous</p>
          </div>
        </Link>
      )}   

      {startIndex + 10 < maxResults && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
          <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
            <ChevronRightIcon className='h-5'/>
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PaginationButtons;
