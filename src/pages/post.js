import { useRouter } from 'pages/next/router';
import Layout from 'components/site/layout/Layout';

const Page = () => {
  const router = useRouter();
  const {
    query: { title }
  } = router;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
