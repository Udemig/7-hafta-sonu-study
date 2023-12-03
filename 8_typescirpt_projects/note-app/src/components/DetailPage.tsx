import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { Link, useOutletContext } from 'react-router-dom';
import { Note } from '../types';
import ReactMarkdown from 'react-markdown';

type DetailPageProps = {
  deleteNote: (id: string) => void;
};

const DetailPage = ({ deleteNote }: DetailPageProps) => {
  const data: Note = useOutletContext();

  return (
    <div className="container py-5">
      <Row>
        <Col>
          <h1>{data.title}</h1>
          <Stack direction="horizontal" gap={3} className="flex-wrap">
            {data.tags?.map((tag) => (
              <Badge key={tag.value} className="fs-6">
                {tag.label}
              </Badge>
            ))}
          </Stack>
        </Col>
        <Col>
          <Stack
            direction="horizontal"
            gap={2}
            className="align-items-center justify-content-end"
          >
            <Link to={'edit'}>
              <Button>Düzenle</Button>
            </Link>

            <Button
              onClick={() => deleteNote(data.id)}
              variant="outline-danger"
            >
              Sil
            </Button>

            <Link to={'/'}>
              <Button variant="outline-secondary">Geri</Button>
            </Link>
          </Stack>
        </Col>
      </Row>

      {/* markdown içeriğini ekrana basma */}
      <ReactMarkdown className={'my-5'}>
        {data.markdown}
      </ReactMarkdown>
    </div>
  );
};

export default DetailPage;
