import { CmsWidget } from '@cmsonfire/cms-types';
import { LegacyRef, useEffect, useRef, useState } from 'react';

const StringWidgetControl: CmsWidget.CmsWidgetControl<string> = (
  props: CmsWidget.CmsWidgetControlProps<string>
) => {
  const { forID, value, classNameWrapper, setActiveStyle, setInactiveStyle } =
    props;

  // The selection to maintain for the input element
  const [selectionLoc, setSelectionLoc] = useState(0);

  const stringInput: LegacyRef<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (stringInput && stringInput.current?.selectionStart !== selectionLoc) {
      stringInput.current?.setSelectionRange(selectionLoc, selectionLoc);
    }
  }, [stringInput, selectionLoc]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectionLoc(event.target.selectionStart || 0);
    props.onChange(event.target.value);
  };

  return (
    <input
      ref={stringInput}
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value || ''}
      onChange={handleChange}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
    />
  );
};

export default StringWidgetControl;
