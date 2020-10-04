import Head from 'next/head';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Video from './video';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Macro</title>
      </Head>
      <Container maxWidth="sm">
        <h1>Macro</h1>
        <Video />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Container>
    </div>
  );
}
