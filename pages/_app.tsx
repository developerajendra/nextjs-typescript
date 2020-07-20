import { AppProps } from 'next/app'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return<Container fluid style={{maxWidth:'1366px'}}> 
          <Component {...pageProps} />
    </Container>
}
