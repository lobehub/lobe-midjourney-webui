import { TextArea } from '@lobehub/ui';
import { Button, Flex } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStore } from '@/store';

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
        style={{ maxHeight: 160, minHeight: 80 }}
        type={'block'}
        value={prompts}
      />
      <Flexbox direction={'vertical-reverse'} gap={8}>
        <Button onClick={() => createImagineTask()} style={{ height: '100%' }} type={'primary'}>
          生成
        </Button>
      </Flexbox>
    </Flex>
  );
});

export default PromptInput;
