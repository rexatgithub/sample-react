export const LOADING = 'nav:loading'

export function loading(state) {
  return {
    type: LOADING,
    payload: {
      loading: state,
    },
  }
}
