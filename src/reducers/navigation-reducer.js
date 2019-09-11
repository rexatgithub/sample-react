import { LOADING } from '../actions/navigation-action'

export default function navigationReducer(state = [], { type, payload }) {
  switch (type) {
    case LOADING:
      return payload.loading
    default:
      return state
  }
}
