import { CmsWidget } from '@cmsonfire/cms-types';

const TextWidgetPreview: CmsWidget.CmsWidgetPreview<string> = (
  options: CmsWidget.CmsWidgetPreviewProps<string>
) => {
  return <div>{options.value}</div>;
};

export default TextWidgetPreview;
