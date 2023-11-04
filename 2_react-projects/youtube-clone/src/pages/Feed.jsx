import { useContext } from 'react';
import SideBar from './../components/SideBar';
import { YoutubeContext } from '../context/youtubeContext';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';
import SkeletonLoading from '../components/SkeletonLoading';
const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <SkeletonLoading />
        ) : (
          videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
