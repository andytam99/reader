import type { GetStaticProps } from 'next'
import ArticleLayout from '../src/layout/article';

interface Data {
  title: string;
  subtitle: string;
  description: string;
  index: { name: string; link: string }[];
  content: string;
  error?: string;
}

const Home = (Data: Data) => {
  return (
    Data.error ? <p>Error getting content</p> : <ArticleLayout {...Data} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let dev = process.env.NODE_ENV == 'development',
    dev_url = process.env.DEV_URL,
    prod_url = process.env.VERCEL_URL;
  const get = await fetch(`${dev ? dev_url : prod_url}/api/content`);
  const data = await get.json();
  return {
    props: data
  }
}

export default Home
