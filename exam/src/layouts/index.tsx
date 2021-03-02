import { Layout, Button, Menu } from 'antd';
import { history } from 'umi';
const { Header, Footer, Content } = Layout;

export default (props) => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['practice']}>
        <Menu.Item key="practice" onClick={() => this.query('520748154880')}>UNIX网络编程</Menu.Item>
        <Menu.Item key="exam" onClick={() => history.push('/')}>考试</Menu.Item>
        <Menu.Item key="music" onClick={() => this.query('545844772864')}>乐理</Menu.Item>
        <Menu.Item key="exam-adm" onClick={() => history.push('/exam-adm')}>试卷管理</Menu.Item>
      </Menu>
    </Header>
    <Content style={{
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 80,
    }}>
      {props.children}
    </Content>
  </Layout>
);