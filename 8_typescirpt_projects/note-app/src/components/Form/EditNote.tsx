import { useOutletContext } from 'react-router-dom';
import NoteForm from './NoteForm';
import { Note, NoteData, Tag } from '../../types';

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({
  onSubmit,
  createTag,
  availableTags,
}: EditNoteProps) => {
  const data: Note = useOutletContext();

  return (
    <div className="container py-5">
      <h2>Note'u Düzenle</h2>
      <NoteForm
        // onSubmititi noteform'da 1 param alan fonksiyon şeklinde
        // tanımladık ama güncelleme fonk. 2 param alıyor
        // bu yüzden tek param alan bir fosnkiyon tanımlayıp
        // içerisinde güncelleme fonk. çalıştırdık
        onSubmit={(updatedNote) => {
          onSubmit(data.id, updatedNote);
        }}
        availableTags={availableTags}
        createTag={createTag}
        title={data.title}
        tags={data.tags}
        markdown={data.markdown}
      />
    </div>
  );
};

export default EditNote;
