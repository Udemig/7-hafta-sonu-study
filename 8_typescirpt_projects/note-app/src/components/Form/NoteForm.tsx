import { FormEvent, useRef, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select/creatable';
import { Tag } from '../../types';
import { CreateNoteProps } from './CreateNote';
import { v4 } from 'uuid';

const NoteForm = ({
  onSubmit,
  availableTags,
  createTag,
}: CreateNoteProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // yeni not oluşturur
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-5">
      <Stack>
        {/* üst kısım */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                className="shadow"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                // seçilem elemenaları göstermek için veridk
                value={selectedTags}
                // elemalar silindiğinde state'i günceller
                // @ts-ignore
                onChange={(all_tags) => setSelectedTags(all_tags)}
                // yeni etiketl oluşturluğunda
                onCreateOption={(text) => {
                  // etikete id ekle
                  const newTag: Tag = { label: text, value: v4() };

                  // lokal'e yeni etiketi kayder
                  createTag(newTag);

                  // state'i güncelle
                  setSelectedTags([...selectedTags, newTag]);
                }}
                className="shadow"
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>

        {/* içerik alanı */}
        <Form.Group className="mt-4">
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            ref={markdownRef}
            as={'textarea'}
            className="shadow"
            style={{ minHeight: '300px', maxHeight: '500px' }}
          />
        </Form.Group>

        {/* butonlar */}
        <Stack
          direction="horizontal"
          className="justify-content-end mt-5"
          gap={4}
        >
          <Button type="submit">Kaydet</Button>
          <Button
            onClick={() => navigate(-1)} // geçmişte bir adıö geri gönderme
            type="button"
            variant="secondary"
          >
            Geri
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
