declare namespace Service {
  interface MockServiceResult<T = any> {
    code: number;
    message: string;
    data: T;
    type: 'success' | 'error';
  }

  interface MockOption {
    url: Record<string, any>;
    body: Record<string, any>;
    query: Record<string, any>;
    headers: Record<string, any>;
  }
}
