import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import moment from 'moment/moment';
import 'moment/locale/tr';

const Post = ({ tweet }) => {
  // tarih verisi şuandan ne kadar önce hesaplama
  const date = moment(tweet?.createdAt?.toDate()).fromNow();

  return (
    <div className="flex gap-3 p-3 border-b-[1px] border-gray-700">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
      />

      <div className="w-full">
        {/* üst kısım > kullanıcı bilgiler */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <p className="font-bold">{tweet.user.name}</p>
            <p className="text-gray">
              @{tweet.user.name?.toLowerCase().replace(' ', '_')}
            </p>
            <p className="text-gray">{date}</p>
          </div>
          <p></p>
        </div>

        {/* orta kısım > tweet içeirği */}
        <div className="my-3">
          <p>{tweet.textContent}</p>
          {tweet.imageContent && <img src={tweet.imageContent} />}
        </div>

        {/* alt kısım > etkileşim butonları */}
        <div className="flex justify-between">
          <div className="p-2 px-3 rounded-full transition cursor-pointer hover:bg-[#00b7ff69]">
            <BiMessageRounded />
          </div>
          <div className="p-2 px-3 rounded-full transition cursor-pointer hover:bg-[#44ff005a]">
            <FaRetweet />
          </div>
          <div className="p-2 px-3 rounded-full transition cursor-pointer hover:bg-[#e263eb69]">
            <AiOutlineHeart />
          </div>
          <div className="p-2 px-3 rounded-full transition cursor-pointer hover:bg-[#6600ff62]">
            <FiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
