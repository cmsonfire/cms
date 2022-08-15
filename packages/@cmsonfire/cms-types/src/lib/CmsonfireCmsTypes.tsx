import React from 'react';

/* eslint-disable-next-line */
export declare interface ControlComponentProps {
  children?: React.ReactNode;
  childrenElement?: JSX.Element;
  style?: React.CSSProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
  forID: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  classNameWrapper: string;
  setActiveStyle: () => void;
  setInactiveStyle: () => void;
}
/* eslint-disable-next-line */
export interface PreviewComponentProps {
  children?: React.ReactNode;
  childrenElement?: JSX.Element;
  style?: React.CSSProperties;
  value: JSX.Element;
}

/* eslint-disable-next-line */
export interface CmsWidgetOptions {
  name: string;
  controlComponent(options: ControlComponentProps): JSX.Element;
  previewComponent(options: PreviewComponentProps): JSX.Element;
}
/* eslint-disable-next-line */
export interface CmsWidget {
  Widget: () => CmsWidgetOptions;
  controlComponent(options: ControlComponentProps): JSX.Element;
  previewComponent(options: PreviewComponentProps): JSX.Element;
}

interface ComponentProps extends CmsWidgetOptions {
  children?: React.ReactNode;
  childrenElement?: JSX.Element;
  style?: React.CSSProperties;
}

export declare function ControlComponent(
  props: ControlComponentProps
): React.ReactNode;
export declare function PreviewComponent(
  props: PreviewComponentProps
): React.ReactNode;

export const ControlWidget = ({
  name,
  controlComponent,
  previewComponent,
  children,
  ...props
}: ComponentProps): JSX.Element => {
  return <div {...props}>{children}</div>;
};

export default ControlWidget;
