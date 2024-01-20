import { ActionIcon, TextArea } from '@lobehub/ui';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import { SendHorizontal } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

const useStyles = createStyles(({ css, token, stylish, cx }) => ({
  container: css`
    padding: 4px;
    background: ${token.colorFillTertiary};
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: ${token.borderRadiusLG}px;
  `,
  prompt: cx(
    stylish.noScrollbar,
    css`
      padding: 6px;
      font-family: ${token.fontFamilyCode};
      font-size: 13px;
      line-height: 1.4 !important;
    `,
  ),
}));

const PromptInput = memo(() => {
  const { styles } = useStyles();
  const [prompts, updatePrompts, createImagineTask, isLoading] = useMidjourneyStore((s) => [
    s.prompts,
    s.updatePrompts,
    s.createImagineTask,
    midjourneySelectors.isCreatingTaskLoading(s),
  ]);
  const { t } = useTranslation('common');

  return (
    <Flex align={'center'} className={styles.container} gap={8}>
      <TextArea
        autoSize={{ maxRows: 3, minRows: 1 }}
        className={styles.prompt}
        onChange={(e) => {
          updatePrompts(e.target.value);
        }}
        placeholder={t('input.placeholder')}
        resize={false}
        type={'pure'}
        value={prompts}
      />
      <ActionIcon
        active
        icon={SendHorizontal}
        loading={isLoading}
        onClick={() => createImagineTask()}
      />
    </Flex>
  );
});

export default PromptInput;
