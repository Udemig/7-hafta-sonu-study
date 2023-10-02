import { useSearchParams } from 'react-router-dom';

const VideoDetail = () => {
  const [searchParam] = useSearchParams();

  const id = searchParam.get('v');
  return (
    <div className="text-center mt-5">
      {id}id'li video görüntüleniyor
    </div>
  );
};

export default VideoDetail;
