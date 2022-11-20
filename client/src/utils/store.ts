// ####################################################################################################
// ~~~~~~ Reducers
// ####################################################################################################

type Action = {
  type: string;
  [key: string]: any;
};

type Reducer<T> = {
  [reducer: string]: (state: T, action?: Action) => T;
};

export const dynReducer = <T>(initState: T, reducer: Reducer<T>) => {
  const finalReduction = (state = initState, action: Action): T => {
    switch (true) {
      case !!reducer[action.type]:
        return reducer[action.type](state, action);

      default:
        return state;
    }
  };

  return finalReduction as (state: T, action: Action) => T;
};

// ####################################################################################################
// ~~~~~~ Fields input on change
// ####################################################################################################

export const genFieldMR = <T, U>(prefix: string, fieldName: keyof T) => {
  // ~~~~~~ Mutator types

  const MT = {
    CHANGE: `${prefix}-ch-${String(fieldName)}`
  };

  // ~~~~~~ Mutator creators

  const MC = {
    change: (value: U) => ({
      type: MT.CHANGE,
      payload: value
    })
  } as const;

  // ~~~~~~ Reducer

  const Reducer = {
    [MT.CHANGE]: (state: T, { payload }: ReturnType<typeof MC.change>): T => {
      return {
        ...state,
        [fieldName]: payload
      };
    }
  };

  return {
    MT,
    MC,
    Reducer
  };
};
