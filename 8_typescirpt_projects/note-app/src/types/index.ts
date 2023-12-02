// notedata'nın tiplerini miras al ve üzerine id ekle
export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  label: string;
  value: string;
};

// Verileri lokalde tutarken etiketlerin sadece id'sini tutucaz
// bu yüzden bunun içi yeni bir tip oluşturlaım
export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[]; // note'ların idleini lokalde sakalyacaığımız
};
