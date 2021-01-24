import '../styles/global.css'
import {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

// @ts-ignore
export default App
