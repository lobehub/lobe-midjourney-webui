import { ActionIcon, TextArea } from '@lobehub/ui';
import { Flex, Upload } from 'antd';
import { createStyles } from 'antd-style';
import { FileImageIcon, SendHorizontal } from 'lucide-react';
import { memo, useState } from 'react';
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
  const [prompts, uploadImageUrl, isLoading, updatePrompts, createImagineTask, uploadImage] =
    useMidjourneyStore((s) => [
      s.prompts,
      s.uploadImageUrl,
      midjourneySelectors.isCreatingTaskLoading(s),
      s.updatePrompts,
      s.createImagineTask,
      s.uploadImage,
    ]);
  const { t } = useTranslation('common');
  const [imageUploading, setImageUploading] = useState(false);

  console.log(uploadImageUrl);

  return (
    <Flex align={'center'} className={styles.container} gap={8}>
      <Upload
        accept="image/*"
        beforeUpload={async (file) => {
          setImageUploading(true);

          try {
            await uploadImage(file);
          } catch {}

          setImageUploading(false);
          return false;
        }}
        multiple={true}
        showUploadList={false}
      >
        <ActionIcon icon={FileImageIcon} loading={imageUploading} title={t('input.uploadImage')} />
      </Upload>
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
        loading={isLoading || imageUploading}
        onClick={() => createImagineTask()}
      />
    </Flex>
  );
});

export default PromptInput;
