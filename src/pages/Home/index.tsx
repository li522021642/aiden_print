import aiden from '@/assets/aiden.jpg';
import wx from '@/assets/wx.png';
import zfb from '@/assets/zfb.png';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Card, Divider, Space, Typography } from 'antd';
import styles from './index.less';

const { Title, Text } = Typography;

const arrNav = [
  {
    name: '算数',
    path: '/number',
  },
  {
    name: '数独',
    path: '/shudu',
  },
  {
    name: '图形',
    path: '/chart',
  },
];

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <div className={styles.box}>
        <Space size={'large'}>
          {arrNav.map((el: any, index: number) => (
            <Card hoverable={true} key={index}>
              <Link to={el.path} className={styles.itemBox}>
                {el.name}
              </Link>
            </Card>
          ))}
        </Space>
      </div>
      <Divider />
      <div className={styles.bottomBox}>
        <Card
          title={
            <div>
              <Title level={3}>捐赠作者</Title>
              <Text>
                如您得到了有价值的信息或帮助，请考虑扫描二维码捐赠和鼓励
              </Text>
            </div>
          }
          style={{ width: 600 }}
        >
          <Space size={'large'}>
            <Card title="支付宝" hoverable={true}>
              <img className={styles.img} src={zfb} alt="支付宝" />
            </Card>
            <Card title="微信" hoverable={true}>
              <img className={styles.img} src={wx} alt="微信" />
            </Card>
          </Space>
        </Card>
        <Card title="其他作品" style={{ width: 500, marginLeft: '20px' }}>
          <Space size={'large'}>
            <Card
              title={
                <div>
                  <Title level={5}>舒尔特小程序</Title>
                  <Text>锻炼你的专注力，提高你的记忆力，让你的大脑更灵活</Text>
                </div>
              }
              hoverable={true}
            >
              <img className={styles.img} src={aiden} alt="舒尔特小程序" />
            </Card>
          </Space>
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
