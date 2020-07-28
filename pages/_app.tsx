import { AppProps } from 'next/app'
import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store';


 function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
}

const makestore = ()=>store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App)