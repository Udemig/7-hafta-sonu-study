import { useEffect, useState } from 'react';
import { getData } from '../utils/helpers';
import Loading from './Loading';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import millify from 'millify';
import moment from 'moment/moment';
import 'moment/locale/tr';
import StringArea from './StringArea';

const VideoInfo = ({ id }) => {
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);

  const getInfos = async () => {
    // video detaylarını alır
    const detailRes = await getData(`/video/info?id=${id}`);

    // ilk isteğin bitmesinin ardından
    // kanal detaylarını alır
    const channelRes = await getData(
      `/channel/about?id=${detailRes.data.channelId}`
    );

    setDetail(detailRes.data);
    setChannel(channelRes.data.meta);
  };

  useEffect(() => {
    getInfos();
  }, []);

  if (!detail || !channel) return <Loading />;

  return (
    <>
      <h1 className="mt-3 text-xl font-bold">{detail.title}</h1>
      {/* kanal detayları */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={channel?.avatar[0]?.url}
          />
          <div>
            <h4 className="font-bold">{channel.title}</h4>
            <p>{channel.subscriberCountText}</p>
          </div>
          <button className="bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]">
            Abone Ol
          </button>
        </div>

        <div className="flex item-center rounded-full py-2 px-8 text-lg bg-[#4b4a4a] cursor-pointer">
          <div className="pr-3 border-r-[1px]">
            <AiFillLike />
          </div>
          <div className="pl-3">
            <AiFillDislike />
          </div>
        </div>
      </div>
      {/* hakkında kısmı */}
      <div className="bg-[#383838] rounded p-2 mt-4 cursor-pointer hover:bg-[#535353]">
        <div className="flex gap-3 ">
          <p>{millify(detail.viewCount)}</p>

          <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        {/* yazı içeriği */}
        <StringArea text={detail.description} max={200} />
      </div>
    </>
  );
};

export default VideoInfo;
