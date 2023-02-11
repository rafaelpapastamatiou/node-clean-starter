export interface UseCase<Params extends unknown[], Result> {
  execute(...params: Params): Promise<Result>;
}
