import { PureComponent } from 'react';
import { Layout, Button, Menu } from 'antd';
import { connect, history } from 'umi';
const { Header, Footer, Content } = Layout

@connect(({ exam }) => ({
  examList: exam.list,
}))
export default class ExamLayout extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'exam/query' });
  }

  query = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'practice/query',
      payload: {
        examId: id,
      },
    });
  }

  render() {
    const { children, examList, location } = this.props;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ location.pathname.substring(1) ]}>
            <Menu.Item key="topic-adm" onClick={() => history.push('/topic-adm')}>主题</Menu.Item>
            <Menu.Item key="question-adm" onClick={() => history.push('/question-adm')}>题目</Menu.Item>
            {examList.map(exam => (
              <Menu.Item
                key={`exam_${exam.id}`}
                onClick={() => {
                  this.query(exam.id);
                  history.push('/practice');
                }}
              >
                {exam.title}
              </Menu.Item>
            ))}
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
