import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Space } from 'antd';
import styles from './index.less';

const arrNav = [
  {
    name: '数字',
    path: '/number',
  },
  {
    name: '数独',
    path: '/shudu',
  },
];

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <div className={styles.box}>
        <Space size={'large'}>
          {arrNav.map((el: any, index: number) => (
            <Link to={el.path} className={styles.itemBox} key={index}>
              {el.name}
            </Link>
          ))}
        </Space>
      </div>
    </PageContainer>
  );
};

export default HomePage;
