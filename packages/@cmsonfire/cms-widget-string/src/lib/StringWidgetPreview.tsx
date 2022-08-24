import { CmsWidget } from '@cmsonfire/cms-types';

const StringWidgetPreview: CmsWidget.CmsWidgetPreview<string> = (
  options: CmsWidget.CmsWidgetPreviewProps<string>
) => {
  return <div>{options.value}</div>;
};

export default StringWidgetPreview;
