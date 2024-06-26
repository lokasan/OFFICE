import {createStore} from './createStore'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return {...state, count: state.count + 1}
  }
  return state
}

describe('createStore', () => {
  let store
  let handler
  beforeEach(() => {
    store = createStore(reducer, initialState)
    handler = jest.fn()
  })
  test('should be return store object', () => {
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.subscribe).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })
  test('Should be return object as a state', () => {
    expect(store.getState()).toBeInstanceOf(Object)
  })
  test('should be return', () => {
    expect(store.getState()).toEqual(initialState)
  })
  test('should be change state if actions exists', () => {
    store.dispatch({type: 'ADD'})
    expect(store.getState().count).toBe(1)
  })
  test('should not be change state if action don\'t exists', () => {
    store.dispatch({type: 'NOT_EXISTING_ACTION'})
    expect(store.getState().count).toBe(0)
  })
  test('should call subscriber function', () => {
    store.subscribe(handler)
    store.dispatch({type: 'ADD'})
    expect(handler).toHaveBeenCalled()
    expect(handler).toHaveBeenCalledWith(store.getState())
  })
  test('Should not call sub if unsubscribe', () => {
    const sub = store.subscribe(handler)
    sub.unsubscribe()
    expect(handler).not.toHaveBeenCalled()
  })
  test('Should dispatch in async way', () => {
    return new Promise(resolve => {
      setTimeout(() => {
        store.dispatch({type: 'ADD'})
      }, 500)
      setTimeout(() => {
        expect(store.getState().count).toBe(1)
        resolve()
      }, 1000)
    })
  })
})
