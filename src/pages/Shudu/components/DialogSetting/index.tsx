import { Button, Form, Modal, Radio, Space } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './index.less';

interface Props {
  onSuccess: (data: any) => void;
  onGetCount: (count: number) => void;
}
export default forwardRef((props: Props, ref: any) => {
  const [show, setShow] = useState(false);

  const [form] = Form.useForm();

  // 表单的确认
  const onFinish = (values: any) => {
    // 关闭弹框
    setShow(false);
    props.onSuccess(values);
    props.onGetCount(values.count);
  };

  // 显示弹框
  const showDialog = () => {
    setShow(true);
  };
  // 关闭弹框
  const hideDialog = () => {
    setShow(false);
  };

  // 自定义暴露给父组件的实例值
  useImperativeHandle(ref, () => ({
    showDialog,
    hideDialog,
  }));

  return (
    <Modal
      title="配置"
      width={700}
      open={show}
      onCancel={() => hideDialog()}
      footer={null}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        initialValues={{ count: '40' }}
        autoComplete="off"
      >
        <Form.Item label="快速选择" name="count">
          {/* 空格的数量 */}
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="30">简单30</Radio.Button>
            <Radio.Button value="35">一般35</Radio.Button>
            <Radio.Button value="40">困难40</Radio.Button>
            <Radio.Button value="45">魔鬼45</Radio.Button>
            <Radio.Button value="50">疯狂50</Radio.Button>
            <Radio.Button value="55">极致55</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <div className={styles.footerBox}>
          <Space>
            <Button onClick={() => hideDialog()}>取消</Button>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Space>
        </div>
      </Form>
    </Modal>
  );
});
