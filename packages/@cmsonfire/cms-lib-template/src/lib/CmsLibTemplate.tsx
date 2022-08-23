import { CmsWidget } from '@cmsonfire/cms-types';
import Control from './CmsLibTemplateControl';
import Preview from './CmsLibTemplatePreview';

export const TemplateWidget: CmsWidget.CmsWidgetParams<string> = {
  name: 'text',
  Control,
  Preview,
};

const Widget: CmsWidget.Widget<string> = () => {
  return TemplateWidget;
};

export default Widget;
