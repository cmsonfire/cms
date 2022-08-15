import { CmsWidgetOptions, CmsWidget } from '@cmsonfire/cms-types';
import controlComponent from './CmsTemplateControl';
import previewComponent from './CmsTemplatePreview';

function Widget(props = {}): CmsWidgetOptions {
  return {
    name: 'text',
    controlComponent,
    previewComponent,
    ...props,
  };
}

export const NetlifyCmsWidgetTemplate: CmsWidget = {
  Widget,
  controlComponent,
  previewComponent,
};
export default NetlifyCmsWidgetTemplate;
