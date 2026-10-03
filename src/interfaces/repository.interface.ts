export interface IRepository<T> {

  findAll(): T[];

  findById(id: number): T | undefined;

  create(data: T): T;

  update(
    id: number,
    data: Partial<T>
  ): T | undefined;

  delete(id: number): boolean;
}