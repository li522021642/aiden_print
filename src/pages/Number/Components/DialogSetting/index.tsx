import { Button, Checkbox, Form, Modal, Radio, Space } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './index.less';

interface Props {
  onSuccess: (data: any) => void;
}
export default forwardRef((props: Props, ref: any) => {
  const [show, setShow] = useState(false);

  const [form] = Form.useForm();
  // 表单的确认
  const onFinish = (values: any) => {
    // 关闭弹框
    setShow(false);
    // 确定的回调
    if (values.quick) {
      values.quick = values.quick[0];
    }
    props.onSuccess(values);
  };

  // 显示弹框
  const showDialog = () => {
    setShow(true);
  };
  // 关闭弹框
  const hideDialog = () => {
    setShow(false);
  };

  // 快速选择
  const [showSymbol, setShowSymbol] = useState(true);
  const onChangeCheck = (val: any) => {
    if (val.length > 1) {
      form.setFieldValue('quick', [val[1]]);
    }
    setShowSymbol(!(val.length > 0));
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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        initialValues={{ num: '5', symbol: '+' }}
        autoComplete="off"
      >
        <Form.Item label="快速选择" name="quick">
          <Checkbox.Group onChange={(val) => onChangeCheck(val)}>
            {/* <Checkbox value="1">凑十法</Checkbox> */}
            <Checkbox value="1">减十法</Checkbox>
            <Checkbox value="2">连续加法3</Checkbox>
            <Checkbox value="3">连续减法3</Checkbox>
            <Checkbox value="4">混合加减法3</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        {showSymbol && (
          <Form.Item label="算数类型" name="symbol">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="+">加法</Radio.Button>
              <Radio.Button value="-">减法</Radio.Button>
            </Radio.Group>
          </Form.Item>
        )}
        <Form.Item label="单个算数最大值" name="num">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="5">5</Radio.Button>
            <Radio.Button value="10">10</Radio.Button>
            <Radio.Button value="20">20</Radio.Button>
            <Radio.Button value="50">50</Radio.Button>
            <Radio.Button value="100">100</Radio.Button>
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
