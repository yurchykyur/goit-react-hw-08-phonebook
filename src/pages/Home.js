import { Container } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Container fixed>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </Container>
  );
}
