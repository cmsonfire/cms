import { CmsWidgetOptions, CmsWidget } from '@cmsonfire/cms-types';
import controlComponent from './TextWidgetControl';
import previewComponent from './TextWidgetPreview';

function Widget(props = {}): CmsWidgetOptions {
  return {
    name: 'text',
    controlComponent,
    previewComponent,
    ...props,
  };
}

export const TextWidget: CmsWidget = {
  Widget,
  controlComponent,
  previewComponent,
};
