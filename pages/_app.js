import NextNProgress from 'nextjs-progressbar';
import '@/styles/index.css';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress
        color="#FDFDFD"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
