import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/store'

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp