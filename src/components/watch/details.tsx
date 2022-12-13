import { useState } from 'react';
import { stripHtml } from '@/utils/index';
import Image from '@/components/shared/image';

const WatchDetails = ({ animeList }: any) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="mt-3 ml-4">
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <Image
          layout="fill"
          objectFit="cover"
          src={animeList?.image}
          alt={animeList?.title?.romaji}
          className="rounded-md"
          containerclassname="relative h-[130px] w-[100px] md:h-[250px] md:w-[200px]"
        />
        <div className="text-white">
          <h1 className="mb-2 text-md md:text-3xl font-semibold text-white">
            {animeList?.title?.english}
          </h1>
          <p className="leading-6 text-xs md:text-sm text-slate-300 font-extralight mt-2">
            {showMore
              ? stripHtml(animeList?.description)
              : stripHtml(animeList?.description?.substring(0, 415))}

            <button
              className="shadow-lg text-white text-xs p-1 transform transition duration-300 ease-out hover:scale-105"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;
