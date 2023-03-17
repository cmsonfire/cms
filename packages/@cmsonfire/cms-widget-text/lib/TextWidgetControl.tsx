import { CmsWidget } from '@cmsonfire/cms-types';
import Textarea from 'react-textarea-autosize';

const TextWidgetControl: CmsWidget.CmsWidgetControl<string> = (
  props: CmsWidget.CmsWidgetControlProps<string>
) => {
  const {
    forID,
    value,
    onChange,
    classNameWrapper,
    setActiveStyle,
    setInactiveStyle,
  } = props;

  return (
    <Textarea
      id={forID}
      value={value || ''}
      className={classNameWrapper}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextWidgetControl;
