import { Badge, Card, Stack } from 'react-bootstrap';

const NoteCard = () => {
  return (
    <Card>
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-between h-100"
        >
          <span>Başlık</span>

          <Stack
            direction="horizontal"
            className="justify-content-center"
            gap={2}
          >
            <Badge>Seyehat</Badge>
            <Badge>Eğlence</Badge>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
