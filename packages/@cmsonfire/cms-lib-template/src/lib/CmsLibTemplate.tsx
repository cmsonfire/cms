import { CmsWidgetOptions, CmsWidget } from '@cmsonfire/cms-types';
import controlComponent from './CmsLibTemplateControl';
import previewComponent from './CmsLibTemplatePreview';

function Widget(props = {}): CmsWidgetOptions {
  return {
    name: 'text',
    controlComponent,
    previewComponent,
    ...props,
  };
}

export const CmsLibTemplate: CmsWidget = {
  Widget,
  controlComponent,
  previewComponent,
};
