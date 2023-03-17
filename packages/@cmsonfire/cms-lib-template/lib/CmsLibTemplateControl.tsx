import { CmsWidget } from '@cmsonfire/cms-types';

const TemplateControl: CmsWidget.CmsWidgetControl<string> = (
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
    <input
      id={forID}
      value={value || ''}
      className={classNameWrapper}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TemplateControl;
