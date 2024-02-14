import { ActionIcon, TextArea } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Brush } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import ReferenceImage from './ReferenceImage';

const useStyles = createStyles(({ css, token, stylish, cx }) => ({
  container: css`
    padding: 4px;
    background: ${token.colorFillTertiary};
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: ${token.borderRadiusLG}px;
  `,
  deleteButton: css`
    color: #fff;
    background: ${token.colorBgMask};

    &:hover {
      background: ${token.colorError};
    }
  `,
  image: css`
    width: 56px;
    height: 56px;
  `,
  imageWrapper: css`
    align-self: center;

    width: 56px;
    min-width: auto;
    height: 56px;
    min-height: auto;
    margin-block: 0;
  `,
  prompt: cx(
    stylish.noScrollbar,
    css`
      align-self: flex-start;

      padding: 10px 6px 6px;

      font-family: ${token.fontFamilyCode};
      font-size: 13px;
      line-height: 1.4 !important;
    `,
  ),
}));

const PromptInput = memo(() => {
  const { styles } = useStyles();
  const [prompts, isLoading, updatePrompts, createImagineTask] = useMidjourneyStore((s) => [
    s.prompts,
    midjourneySelectors.isCreatingTaskLoading(s),
    s.updatePrompts,
    s.createImagineTask,
  ]);
  const { t } = useTranslation('common');
  const [imageUploading, setImageUploading] = useState(false);

  return (
    <Flexbox align={'flex-start'} className={styles.container} gap={8} horizontal>
      <ReferenceImage imageUploading={imageUploading} setImageUploading={setImageUploading} />
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
        icon={Brush}
        loading={isLoading || imageUploading}
        onClick={() => createImagineTask()}
      />
    </Flexbox>
  );
});

export default PromptInput;
