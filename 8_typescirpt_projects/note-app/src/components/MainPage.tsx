import { Button, Col, Row, Stack, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactSelect from 'react-select';
import NoteCard from './NoteCard';

const MainPage = () => {
  return (
    <div className="container py-5">
      {/* üst kısım */}
      <Stack
        direction="horizontal"
        className="justify-content-between"
      >
        <h1>Notlar</h1>

        <Link to={'/new'}>
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* filtreleme */}
      <Form className="mt-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control className="shadow" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect className="shadow" />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* not listesi */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
