export type ErrorMessageMode = 'none' | 'dialog' | 'message' | undefined;

export interface RequestOptions {
  // 显示错误信息模式
  errorMessageMode?: ErrorMessageMode;
}
