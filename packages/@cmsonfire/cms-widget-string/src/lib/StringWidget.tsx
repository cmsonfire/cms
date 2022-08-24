import { CmsWidget } from '@cmsonfire/cms-types';
import Control from './StringWidgetControl';
import Preview from './StringWidgetPreview';

export const StringWidget: CmsWidget.CmsWidgetParams<string> = {
  name: 'text',
  Control,
  Preview,
};

const Widget: CmsWidget.Widget<string> = () => {
  return StringWidget;
};

export default Widget;
