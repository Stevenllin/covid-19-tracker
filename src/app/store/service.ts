/**
 * @description Saga Boundary (處理 Saga 錯誤邊界)
 * @param saga Saga (Generator function)
*/
export const sagaBoundary = <A>(saga: (action: A) => void) => {
  return function * (action: A) {
    try {
      yield saga(action);
    } catch (error) {
      console.log(error);
    }
  };
};
  