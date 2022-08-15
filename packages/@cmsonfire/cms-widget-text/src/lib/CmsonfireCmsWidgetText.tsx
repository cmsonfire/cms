import { CmsWidgetOptions, CmsWidget } from '@cmsonfire/cms-types';
import controlComponent from './CmsonfireCmsWidgetTextControl';
import previewComponent from './CmsonfireCmsWidgetTextPreview';

function Widget(props = {}): CmsWidgetOptions {
  return {
    name: 'text',
    controlComponent,
    previewComponent,
    ...props,
  };
}

export const CmsonfireCmsWidgetText: CmsWidget = {
  Widget,
  controlComponent,
  previewComponent,
};

export default CmsonfireCmsWidgetText;
