import { TextArea } from '@lobehub/ui';
import { Button, Flex } from 'antd';
import { memo } from 'react';

import { midjourneySelectors, useStore } from '@/store';

const PromptInput = memo(() => {
  const [prompts, running, updatePrompts, createImagineTask] = useStore((s) => [
    s.prompts,
    midjourneySelectors.isAnyTaskRunning(s),
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
      <Flex gap={8} vertical>
        <Button loading={running} onClick={() => createImagineTask()} type={'primary'}>
          生成
        </Button>
        <Button
          disabled={running}
          onClick={() => {
            updatePrompts('');
          }}
        >
          重置
        </Button>
      </Flex>
    </Flex>
  );
});

export default PromptInput;
