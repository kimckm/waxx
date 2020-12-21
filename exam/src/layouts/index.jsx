import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default (props) => (
  <Layout>
    <Header>Header</Header>
    <Content style={{ padding: '0 50px' }}>{props.children}</Content>
  </Layout>
);
