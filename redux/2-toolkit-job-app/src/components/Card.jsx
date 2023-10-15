import { MdLocationOn } from 'react-icons/md';
import { FaSuitcase } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const Card = ({ job }) => {
  // job 'ın type'ına göre class döndürür
  const getClassName = () => {
    switch (job.status) {
      case 'Devam Ediyor':
        return 'pending';
      case 'Reddedildi':
        return 'rejected';
      case 'Mülakat':
        return 'interview';
      default:
        return 'default';
    }
  };

  return (
    <div className="card">
      {/* üst kısım */}
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>
        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>
      {/* alt kısım */}
      <div className="body">
        <div className="field">
          <MdLocationOn />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>
        <div className="field">
          <BsFillCalendarDateFill />
          <p>{job.date}</p>
        </div>
        <div className="status">
          <span className={getClassName()}>{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
