import { ControlComponentProps } from '@cmsonfire/cms-types';

const TemplateControl = (props: ControlComponentProps) => {
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
