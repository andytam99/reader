import type { GetStaticProps } from 'next'
import ArticleLayout from '../src/layout/article';
import { getContent } from '../src/lib';

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
  const data = await getContent()
  return {
    props: data
  }
}

export default Home
