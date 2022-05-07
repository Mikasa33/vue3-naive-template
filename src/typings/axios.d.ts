export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // 显示错误信息模式
  errorMessageMode?: ErrorMessageMode;
}
