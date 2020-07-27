import { AppProps } from 'next/app'
import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
    
}
