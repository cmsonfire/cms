import { CmsWidget } from '@cmsonfire/cms-types';
import Control from './TextWidgetControl';
import Preview from './TextWidgetPreview';

export const TextWidget: CmsWidget.CmsWidgetParams<string> = {
  name: 'text',
  Control,
  Preview,
};

const Widget: CmsWidget.Widget<string> = () => {
  return TextWidget;
};

export default Widget;
