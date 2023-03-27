import { CmsWidget } from '@cmsonfire/cms-types';
import Control from './NumberWidgetControl';
import Preview from './NumberWidgetPreview';

export const NumberWidget: CmsWidget.CmsWidgetParams<number> = {
  name: 'text',
  Control,
  Preview,
};

const Widget: CmsWidget.Widget<number> = () => {
  return NumberWidget;
};

export default Widget;
