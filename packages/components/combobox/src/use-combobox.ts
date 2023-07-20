import { type Signal, computed } from '@angular/core';
import * as combobox from '@zag-js/combobox';

import { useSprenUIEnvironment } from '@spren-ui/components/environment';
import { type Optional } from '@spren-ui/components/utils';
import { normalizeProps, useMachine } from '@spren-ui/zag-angular';

// Increasing integer for generating unique ids for combobox components.
let nextUniqueId = 0;

export type UseComboboxProps = Optional<combobox.Context, 'id'>;
export type UseComboboxReturn = ReturnType<typeof useCombobox>;

export const useCombobox = (props: Signal<UseComboboxProps>) => {
  const getRootNode = useSprenUIEnvironment();

  const initialContext = {
    id: `cb${++nextUniqueId}`,
    getRootNode,
    ...props(),
  };
  const context = computed(() => ({ ...initialContext, ...props() }));

  const [state, send] = useMachine(combobox.machine(initialContext), { context });
  return computed(() => combobox.connect(state(), send, normalizeProps));
};
