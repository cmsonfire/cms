/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactElement } from 'react';

export type GetAssetFunction = (asset: string) => {
  url: string;
  path: string;
  field?: any;
  fileObj: File;
};

export interface CmsWidgetControlProps<T = any> {
  onChange: (value: T) => void;
  forID: string;
  field?: Map<string, any>;
  value?: T;
  classNameWrapper: string;
  setActiveStyle: () => void;
  setInactiveStyle: () => void;
}
export interface CmsWidgetPreviewProps<T = any> {
  value: T;
  field?: Map<string, any>;
  metadata?: Map<string, any>;
  getAsset?: GetAssetFunction;
  entry?: Map<string, any>;
  fieldsMetaData?: Map<string, any>;
}

export type CmsWidgetControl<T = any> = (
  options: CmsWidgetControlProps<T>
) => ReactElement<any, any>;

export type CmsWidgetPreview<T = any> = (
  options: CmsWidgetPreviewProps<T>
) => ReactElement<any, any>;

export interface CmsWidgetParams<T = any> {
  name: string;
  Control: CmsWidgetControl<T>;
  Preview: CmsWidgetPreview<T>;
  // globalStyles?: any;
}

export type Widget<T = any> = () => CmsWidgetParams<T>;

export type CmsWidget<T = any> = CmsWidgetParams<T> | Widget<T>;
