import { ActionIcon, TextArea } from '@lobehub/ui';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import { SendHorizontal } from 'lucide-react';
import { memo } from 'react';

import { useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    padding: 4px;
    background: ${token.colorFillTertiary};
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: ${token.borderRadiusLG}px;
  `,
  prompt: css`
    padding: 6px;
    font-family: ${token.fontFamilyCode};
  `,
}));

const PromptInput = memo(() => {
  const { styles } = useStyles();
  const [prompts, updatePrompts, createImagineTask] = useMidjourneyStore((s) => [
    s.prompts,
    s.updatePrompts,
    s.createImagineTask,
  ]);

  return (
    <Flex align={'flex-end'} className={styles.container} gap={8}>
      <TextArea
        autoSize={{ maxRows: 3, minRows: 1 }}
        className={styles.prompt}
        onChange={(e) => {
          updatePrompts(e.target.value);
        }}
        placeholder={'Midjourney Prompt...'}
        resize={false}
        type={'pure'}
        value={prompts}
      />
      <ActionIcon active icon={SendHorizontal} onClick={() => createImagineTask()} />
    </Flex>
  );
});

export default PromptInput;
