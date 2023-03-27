import { CmsWidget } from '@cmsonfire/cms-types';
import { forwardRef, useImperativeHandle, useState } from 'react';

const ValidationErrorTypes = {
  PRESENCE: 'PRESENCE',
  PATTERN: 'PATTERN',
  RANGE: 'RANGE',
  CUSTOM: 'CUSTOM',
};

type ErrorMessageFunction = (
  a: string,
  options: {
    fieldLabel?: string;
    minValue?: number | undefined;
    maxValue?: number | undefined;
  }
) => string | undefined;

interface OtherControlProps {
  valueType?: string;
  step?: number;
  min?: number;
  max?: number;
  t?: ErrorMessageFunction;
}

export function validateMinMax(
  value: number | '',
  min: number | undefined,
  max: number | undefined,
  field?: CmsWidget.ImmutableMap<string, any>,
  t?: ErrorMessageFunction
) {
  let error;
  if (!t)
    return {
      type: ValidationErrorTypes.RANGE,
      message: 'No Error handler function supplied for this number field',
    };

  switch (true) {
    case value !== '' &&
      min !== undefined &&
      max !== undefined &&
      (value < min || value > max):
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.range', {
          fieldLabel: field?.get('label', field.get('name')),
          minValue: min,
          maxValue: max,
        }),
      };
      break;
    case value !== '' && min !== undefined && value < min:
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.min', {
          fieldLabel: field?.get('label', field.get('name')),
          minValue: min,
        }),
      };
      break;
    case value !== '' && max !== undefined && value > max:
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.max', {
          fieldLabel: field?.get('label', field.get('name')),
          maxValue: max,
        }),
      };
      break;
    default:
      error = null;
      break;
  }

  return error;
}

const NumberWidgetControl: CmsWidget.CmsWidgetControl<number> = forwardRef(
  (props: CmsWidget.CmsWidgetControlProps<number> & OtherControlProps, ref) => {
    const {
      field,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      forID,
      valueType,
      step,
      min,
      max,
      t,
    } = props;
    const [value, setValue] = useState<number | ''>(props.value || '');

    // To allow isValid to be accessed from our functional component we are using forwardRef and useImperativeHandle
    useImperativeHandle(ref, () => ({
      isValid: () => {
        const hasPattern = !!field?.get('pattern') || false;
        const min = field?.get('min') || false;
        const max = field?.get('max') || false;

        // Pattern overrides min/max logic always:
        if (hasPattern) {
          return true;
        }

        const error = validateMinMax(
          valueType === 'float'
            ? parseFloat(value.toString())
            : parseInt(value.toString()) || '',
          min,
          max,
          field,
          t
        );
        return error ? { error } : true;
      },
    }));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const valueType = props.field?.get('value_type');
      const { onChange } = props;
      const value =
        valueType === 'float'
          ? parseFloat(event.target.value)
          : parseInt(event.target.value, 10);
      if (!isNaN(value)) {
        setValue(value);
        onChange(value);
      } else {
        setValue('');
        onChange('');
      }
    };

    return (
      <input
        type="number"
        id={forID}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
      />
    );
  }
);

export default NumberWidgetControl;
