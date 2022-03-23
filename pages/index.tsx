import axios from 'axios';
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
    dev_url = process.env.DEV_URL;
  const data = await axios.get(`${dev ? dev_url : ''}/api/content`);
  return {
    props: data
  }
}

export default Home
