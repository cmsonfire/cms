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
  field: Map<string, any>;
  value: T;
  classNameWrapper: string;
  setActiveStyle: () => void;
  setInactiveStyle: () => void;
}
export interface CmsWidgetPreviewProps<T = any> {
  value: T;
  field: Map<string, any>;
  metadata: Map<string, any>;
  getAsset: GetAssetFunction;
  entry: Map<string, any>;
  fieldsMetaData: Map<string, any>;
}

export interface CmsWidgetParams<T = any> {
  name: string;
  controlComponent(options: CmsWidgetControlProps<T>): ReactElement<any, any>;
  previewComponent?(options: CmsWidgetPreviewProps<T>): ReactElement<any, any>;
  // globalStyles?: any;
}

export type ControlWidget = ({
  name,
  controlComponent,
  previewComponent,
  ...props
}: CmsWidgetParams) => ReactElement<any, any>;

export interface CmsWidget<T = any> {
  control:
    | CmsWidgetParams
    | ((options: CmsWidgetControlProps<T>) => ReactElement<any, any>);
  preview?: (options: CmsWidgetPreviewProps<T>) => ReactElement<any, any>;
  // globalStyles?: any;
}
