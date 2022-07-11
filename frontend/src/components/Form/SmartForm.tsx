import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler, UseFormProps } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface SmartFormProps<T> extends UseFormProps<T> {
  id: string;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
}

export function SmartForm<T>({
  id,
  onSubmit,
  children,
  ...rest
}: SmartFormProps<T>): ReactElement {
  const methods = useForm<T>({
    ...rest,
  });

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
