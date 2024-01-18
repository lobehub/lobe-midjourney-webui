import { Steps } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  step: css`
    .ant-steps-item-content {
      padding-bottom: 24px;
    }
  `,
}));

const Guide = memo(() => {
  const { styles } = useStyles();
  return (
    <Steps
      className={styles.step}
      current={-1}
      direction="vertical"
      items={[
        {
          description: '进入设置，填写 Midjourney API 代理地址',
          title: '绑定 Midjourney API 服务',
        },
        {
          description: '输入框中输入提示词，点击生成按钮开始生成',
          title: '开始出图',
        },
      ]}
      style={{ gap: 24, width: 'fit-content' }}
    />
  );
});

export default Guide;
