export function resultSuccess<T>(data: T, { message = '请求成功' } = {}): Service.MockServiceResult {
  return {
    code: 0,
    data,
    message,
    type: 'success',
  };
}

export function resultError(message = '请求失败', { code = -1, data = null } = {}): Service.MockServiceResult {
  return {
    code,
    data,
    message,
    type: 'error',
  };
}
