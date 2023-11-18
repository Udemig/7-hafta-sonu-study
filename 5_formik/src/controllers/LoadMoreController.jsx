import { useSearchParams } from 'react-router-dom';
import LoadMoreView from '../views/LoadMoreView';

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // urldeki page parametresini al
    const pageNumber = params.get('page') || 1;

    // url güncelle ve sayfa değerini 1 arttır
    setParams({ page: +pageNumber + 1 });
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
