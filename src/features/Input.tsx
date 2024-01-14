import { TextArea } from '@lobehub/ui';
import { Button, Flex } from 'antd';
import { memo } from 'react';

import { useStore } from '../store';

const PromptInput = memo(() => {
  const [prompts, updatePrompts, createImagineTask] = useStore((s) => [
    s.prompts,
    s.updatePrompts,
    s.createImagineTask,
  ]);

  return (
    <Flex gap={8}>
      <TextArea
        onChange={(e) => {
          updatePrompts(e.target.value);
        }}
        placeholder={'请输入提示词'}
        size={'large'}
        type={'block'}
        value={prompts}
      />
      <Flex gap={8} vertical>
        <Button onClick={createImagineTask} type={'primary'}>
          生成
        </Button>
        <Button>重置</Button>
      </Flex>
    </Flex>
  );
});

export default PromptInput;
