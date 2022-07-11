import type {
  InputHTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes,
} from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { useController, useFormContext } from 'react-hook-form';
import type { NumberFormatProps } from 'react-number-format';
import NumberFormat from 'react-number-format';

import * as S from './styles';

type MaskTypes = 'money' | 'number';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rules?: RegisterOptions;
  name: string;
  defaultValue?: string | number | readonly string[];
  label?: string;
  maskType?: MaskTypes;
  useTextArea?: boolean;
  fullWidth?: boolean;
}

export function TextField({
  id,
  name,
  placeholder,
  required,
  defaultValue,
  label,
  maskType,
  useTextArea,
  fullWidth,
  ...inputProperties
}: InputProps): ReactElement {
  const { control } = useFormContext();

  let baseRules = {};

  if (required) {
    baseRules = {
      required: { message: 'Campo obrigatório' },
    };
  }

  const { field, fieldState } = useController({
    name,
    control,
    rules: { ...baseRules },
    defaultValue,
  });

  const maskTypes = {
    number: {
      thousandSeparator: '.',
      decimalSeparator: ',',
      placeholder: '00.00',
    },
    money: {
      thousandSeparator: '.',
      decimalSeparator: ',',
      placeholder: '0,00',
      decimalScale: 2,
      fixedDecimalScale: true,
      isAllowed: ({ value: valueString }: { value: string }) =>
        valueString.length < 18,
    },
    date: { format: '##/##/####', placeholder: '__/__/____' },
  };

  return (
    <S.Wrapper
      role="textbox"
      haveMask={!!maskType}
      fullWidth={fullWidth}
      isWithError={!!fieldState.error?.message}
    >
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      {maskType && (
        <>
          <S.Adornment>R$</S.Adornment>
          <NumberFormat
            {...(inputProperties as NumberFormatProps)}
            {...maskTypes[maskType]}
            {...field}
            name={name}
            id={id}
          ></NumberFormat>
        </>
      )}
      {!maskType && useTextArea && (
        <textarea
          {...(inputProperties as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          {...field}
          name={name}
          id={id}
        ></textarea>
      )}

      {!maskType && !useTextArea && (
        <input
          {...field}
          {...inputProperties}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      )}

      <S.ErrorHelperText>{fieldState.error?.message}</S.ErrorHelperText>
    </S.Wrapper>
  );
}
