import { createContext, useEffect, useState } from 'react';
import { categories } from '../utils/constants';
import { getData } from './../utils/helpers';

// context temelini oluştur
export const YoutubeContext = createContext();

// context'de tutulan veirleri uygulamayı aktarıcak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]
  );
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (
      selectedCategory.type === 'home' ||
      selectedCategory.type === 'trending'
    ) {
      // eski videolar sil
      setVideos(null);

      getData(`/${selectedCategory.type}`).then((res) => {
        // verilerden sadece video olanları alma
        const filtred = res.data.data.filter(
          (i) => i.type === 'video'
        );
        // state'i güncelleme
        setVideos(filtred);
      });
    }

    if (selectedCategory.type === 'category') {
      // eski state'i temizle
      setVideos(null);
      // yeni videolar için istek at
      getData(
        `/search?query=${selectedCategory.name}&type=video`
      ).then((res) => {
        // verilerden sadece video olanları alma
        const filtred = res.data.data.filter(
          (i) => i.type === 'video'
        );
        // state'i güncelle
        setVideos(filtred);
      });
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
