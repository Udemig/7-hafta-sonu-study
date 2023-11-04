import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';
import {
  getLanguages,
  translateText,
} from './redux/actions/translateAction';
import Select from 'react-select';
import { useState, useMemo } from 'react';
import { clearAnswer } from './redux/slices/translateSlice';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.translateState);
  const [text, setText] = useState('');
  const [sourceLang, setSourceLang] = useState({
    value: 'tr',
    label: 'Turkish',
  });
  const [targetLang, setTargetLang] = useState({
    value: 'en',
    label: 'English',
  });

  // dizideki code ve name keylerine sahip olan
  // objelerin keylerine value ve label'a çevirdik
  const refinedData = useMemo(() => {
    return state.languages.map((i) => ({
      value: i.code,
      label: i.name,
    }));
  }, [state.languages]);

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const handleSwap = () => {
    // dilleri değiş
    setTargetLang(sourceLang);
    setSourceLang(targetLang);
    // yazıları temizle
    setText('');
    dispatch(clearAnswer());
  };

  return (
    <div id="main-page">
      <div className="container">
        <h1>Çeviri +</h1>
        {/* üst kısım */}
        <div className="upper">
          <Select
            isLoading={state.isLoading}
            value={sourceLang}
            onChange={setSourceLang}
            isDisabled={state.isLoading}
            className="select"
            options={refinedData}
          />
          <button onClick={handleSwap}>Değiş</button>
          <Select
            onChange={setTargetLang}
            value={targetLang}
            isLoading={state.isLoading}
            isDisabled={state.isLoading}
            className="select"
            options={refinedData}
          />
        </div>
        {/* orta kısım */}
        <div className="center">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="çevirmek istediğiniz yazıyı giriniz.."
          ></textarea>
          <textarea
            className={state.isTextLoading ? 'loading' : ''}
            value={state.answer}
            disabled
          ></textarea>
        </div>
        {/* alt kısım */}
        <button
          onClick={() => {
            dispatch(translateText({ sourceLang, targetLang, text }));
          }}
          id="translate-btn"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
