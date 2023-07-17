import { type InjectOptions, type Injector } from '@angular/core';

export type Dict<T = any> = Record<string, T>;

export type SplitArgs<T = Dict> = {
  attrs: T;
  props: T & {
    style?: Dict;
  };
};

export type OnMountOptions = {
  /**
   * The `Injector` in which to create the On Mount ref.
   *
   * If this is not provided, the current injection context will be used instead (via `inject`).
   */
  injector?: Injector;
  /**
   * Type of the options argument to `inject`.
   *
   * @default { optional: true, self: true }
   */
  injectOptions?: InjectOptions;
};
