import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../utils/helpers';
import ReactPlayer from 'react-player';
import VideoInfo from '../components/VideoInfo';
import VideoCard from '../components/VideoCard';

const VideoDetail = () => {
  const [searchParam] = useSearchParams();
  const [related, setRelated] = useState(null);
  const id = searchParam.get('v');

  useEffect(() => {
    // videoyla alakalı içerikleri getirir
    getData(`/related?id=${id}`).then((res) =>
      setRelated(res.data.data)
    );
  }, []);

  return (
    <div className="h-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row lg:px-[100p] gap-5 p-4 ">
      <div className="w-full">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
          width={'100%'}
          height={'60vh'}
        />

        <VideoInfo id={id} />
      </div>

      <div className="flex flex-col gap-10 lg:max-w-[400px] sm:m-auto lg:h-screen lg:overflow-auto">
        {!related
          ? '...'
          : related.map((item) => {
              if (item.type !== 'video') return;
              return <VideoCard video={item} />;
            })}
      </div>
    </div>
  );
};

export default VideoDetail;
