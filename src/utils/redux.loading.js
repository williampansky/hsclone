/**
 * @returns state.isLoading = true;
 * @param {Object} state
 */
export const loadingStart = state => {
  state.isLoading = true;
};

/**
 * @returns state.isLoading = false;
 * @returns state.error = payload.toString();
 * @param {Object} state
 * @param {Object} payload
 */
export const loadingFailed = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.toString();
};

export const loadingSuccess = state => {
  state.error = null;
  state.isLoading = false;
};
