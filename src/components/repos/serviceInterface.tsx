interface IServiceInit {
  status: "init";
}
interface IServiceLoading {
  status: "loading";
}
interface IServiceLoaded<T> {
  status: "loaded";
  payload: T;
}
interface IServiceError {
  status: "error";
  error: Error;
}

export type IService<T> =
  | IServiceInit
  | IServiceLoading
  | IServiceLoaded<T>
  | IServiceError;
