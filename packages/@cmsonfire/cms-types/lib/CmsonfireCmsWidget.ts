/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactElement, JSXElementConstructor } from 'react';
import { Map as ImmutableMap } from 'immutable';

export { ImmutableMap };

export type GetAssetFunction = (asset: string) => {
  url: string;
  path: string;
  field?: any;
  fileObj: File;
};

export interface CmsWidgetControlProps<T = any> {
  onChange: (value: T | '') => void;
  forID: string;
  field?: ImmutableMap<string, any>;
  value?: T;
  classNameWrapper: string;
  setActiveStyle: () => void;
  setInactiveStyle: () => void;
}
export interface CmsWidgetPreviewProps<T = any> {
  value: T;
  field?: ImmutableMap<string, any>;
  metadata?: ImmutableMap<string, any>;
  getAsset?: GetAssetFunction;
  entry?: ImmutableMap<string, any>;
  fieldsMetaData?: ImmutableMap<string, any>;
}

export type CmsWidgetControl<T = any> = (
  options: CmsWidgetControlProps<T>
) => ReactElement<any, string | JSXElementConstructor<any>> | null;

export type CmsWidgetPreview<T = any> = (
  options: CmsWidgetPreviewProps<T>
) => ReactElement<any, string | JSXElementConstructor<any>> | null;

export interface CmsWidgetParams<T = any> {
  name: string;
  Control: CmsWidgetControl<T>;
  Preview: CmsWidgetPreview<T>;
  // globalStyles?: any;
}

export type Widget<T = any> = () => CmsWidgetParams<T>;

export type CmsWidget<T = any> = CmsWidgetParams<T> | Widget<T>;
