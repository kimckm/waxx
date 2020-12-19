import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default (props) => (
  <Layout>
    <Header style={{ background: '#fff' }}>Header</Header>
    <Content>{props.children}</Content>
    <Footer>Footer</Footer>
  </Layout>
);
