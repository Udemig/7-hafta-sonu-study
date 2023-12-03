import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import CreateNote from './components/Form/CreateNote';
import EditNote from './components/Form/EditNote';
import { useMemo } from 'react';
import { NoteData, RawNote, Tag } from './types';
import { v4 } from 'uuid';
import { useLocaleStorage } from './utils/useLocaleStorage';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import Layout from './components/Layout';

const App = () => {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocaleStorage<Tag[]>('TAGS', []);

  // note'verilerindeki etiket idlerine göre
  // etiketlerin isimlerini al ve notlara ekle
  // her render sırasında tekrardan bütün noteların
  // etiketlerini terkrara hesaplamaması için useMemo kullanıcaz
  const noteWithTags = useMemo(
    () =>
      notes.map((note) => ({
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.value)),
      })),
    [notes, tags]
  );

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

  // note'sil
  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // note'u güncelle
  const updateNote = (id: string, { tags, ...data }: NoteData) => {
    // güncellenicek note'un state'de tuttuğumuz halini
    // bulucaz onu kaldırıp yeine gönderilen yeni note'u
    // koyucaz. bunu yaparken etiketlerin sadece id'lerini alıcaz
    const updated = notes.map((note) =>
      note.id === id
        ? {
            ...note, // state'deki note'un billgileri
            ...data, // yeni note'un güncel bilgileri
            tagIds: tags.map((tag) => tag.value), // note'un yeni id'leri
          }
        : note
    );

    // state'i güncelle
    setNotes(updated);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage availableTags={tags} notes={noteWithTags} />
          }
        />
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

        <Route element={<Layout notes={noteWithTags} />} path="/:id">
          <Route
            index
            element={<DetailPage deleteNote={deleteNote} />}
          />
          <Route
            path="edit"
            element={
              <EditNote
                availableTags={tags}
                createTag={createTag}
                onSubmit={updateNote}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
