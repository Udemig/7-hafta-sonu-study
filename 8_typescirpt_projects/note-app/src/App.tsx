import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNote from './components/Form/CreateNote';
import EditNote from './components/Form/EditNote';
import { useState } from 'react';
import { NoteData, RawNote, Tag } from './types';
import { v4 } from 'uuid';
import { useLocaleStorage } from './utils/useLocaleStorage';
import MainPage from './components/MainPage';

const App = () => {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocaleStorage<Tag[]>('TAGS', []);

  // yeni not oluştur
  // lokale'notu eklerken notun etiketlerinin sadece idsini ekliyecez
  const addNote = ({ tags, ...data }: NoteData) => {
    // yeni note'u oluşturma
    const newNote = {
      ...data,
      id: v4(),
      tagIds: tags.map((tag) => tag.value), // etiketlerin sadece idlerini aldık
    };

    // state'e yeni note'u ekledik
    // setState fonksiyonlard afonksiyon tanımlayaınca
    // fonksiyon aprametre orlak state'deki verileri alır
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // yeni etiketi oluştur
  const createTag = (tag: Tag) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/new"
          element={
            <CreateNote
              availableTags={tags}
              createTag={createTag}
              onSubmit={addNote}
            />
          }
        />

        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<EditNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
