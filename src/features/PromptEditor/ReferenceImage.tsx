import { ActionIcon, Image } from '@lobehub/ui';
import { Upload } from 'antd';
import { createStyles } from 'antd-style';
import { ImagePlus, Trash } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useMidjourneyStore } from '@/store/midjourney';

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

      padding: 6px;

      font-family: ${token.fontFamilyCode};
      font-size: 13px;
      line-height: 1.4 !important;
    `,
  ),
}));

interface ReferenceImageProps {
  imageUploading: boolean;
  setImageUploading: (loading: boolean) => void;
}
const ReferenceImage = memo<ReferenceImageProps>(({ imageUploading, setImageUploading }) => {
  const { styles } = useStyles();
  const [uploadImageUrl, uploadImage] = useMidjourneyStore((s) => [
    s.referenceImageUrl,
    s.uploadImage,
  ]);
  const { t } = useTranslation('common');

  return uploadImageUrl ? (
    <Image
      actions={
        <ActionIcon
          className={styles.deleteButton}
          glass
          icon={Trash}
          onClick={(e) => {
            e.stopPropagation();
            useMidjourneyStore.setState({ referenceImageUrl: undefined });
          }}
          size={'small'}
        />
      }
      classNames={{ image: styles.image, wrapper: styles.imageWrapper }}
      src={uploadImageUrl}
      wrapperClassName={styles.imageWrapper}
    />
  ) : (
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
      <ActionIcon icon={ImagePlus} loading={imageUploading} title={t('input.uploadImage')} />
    </Upload>
  );
});

export default ReferenceImage;
