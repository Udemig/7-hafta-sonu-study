import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../utils/helpers';
import SideBar from '../components/SideBar';
import VideoCard from '../components/VideoCard';
import SkeletonLoading from '../components/SkeletonLoading';

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState(null);

  const query = params.get('search_query');

  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) =>
      setResults(res.data.data)
    );
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col items-center gap-5 p-5 w-full overflow-auto h-screen">
        {!results ? (
          <SkeletonLoading />
        ) : (
          results.map((item, i) => {
            if (item.type !== 'video') return;
            return (
              <VideoCard
                key={i}
                video={item}
                design={'max-w-[700px] grid grid-cols-2 gap-5'}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
