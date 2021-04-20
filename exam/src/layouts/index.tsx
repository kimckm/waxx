import { PureComponent } from 'react';
import { Layout, Button, Menu } from 'antd';
import { history } from 'umi';
const { Header, Footer, Content } = Layout

export default class ExamLayout extends PureComponent {
  render() {
    const { children, location } = this.props;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ location.pathname.substring(1) ]}>
            <Menu.Item key="topic-adm" onClick={() => history.push('/topic-adm')}>主题</Menu.Item>
            <Menu.Item key="question-adm" onClick={() => history.push('/question-adm')}>填空题</Menu.Item>
            <Menu.Item key="choice-adm" onClick={() => history.push('/choice-adm')}>选择题</Menu.Item>
            <Menu.Item key="practice" onClick={() => history.push('/practice')}>练习</Menu.Item>
          </Menu>
        </Header>
        <Content style={{
          paddingTop: 80,
        }}>
          {children}
        </Content>
      </Layout>
    );
  }
}
