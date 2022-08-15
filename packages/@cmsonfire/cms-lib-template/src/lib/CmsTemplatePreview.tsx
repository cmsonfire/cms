import { PreviewComponentProps } from '@cmsonfire/cms-types';

function TemplatePreview(props: PreviewComponentProps) {
  return <div>{props.value}</div>;
}

export default TemplatePreview;
