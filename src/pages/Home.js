import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container fixed>
      <h1>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </Container>
  );
}
