import { PreviewComponentProps } from '@cmsonfire/cms-types';

function TextWidgetPreview(props: PreviewComponentProps) {
  return <div>{props.value}</div>;
}

export default TextWidgetPreview;
