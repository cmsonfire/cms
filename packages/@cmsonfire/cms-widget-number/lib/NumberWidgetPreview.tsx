import { CmsWidget } from '@cmsonfire/cms-types';

const NumberWidgetPreview: CmsWidget.CmsWidgetPreview<number> = (
  options: CmsWidget.CmsWidgetPreviewProps<number>
) => {
  return <div>{options.value}</div>;
};

export default NumberWidgetPreview;
