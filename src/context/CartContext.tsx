import { createContext, useContext, ReactNode, useReducer } from 'react'
import { produce } from 'immer'
import { OrderInfo } from '../pages/Cart'
import { useNavigate } from 'react-router-dom'
import { NavigateFunction } from 'react-router-dom'

interface Item {
  id: string,
  quantity: number,
}

export interface Order extends OrderInfo {
  id: number,
  items: Item[],
}

interface CartState {
  cart: Item[],
  orders: Order[],
}

export type Actions =
  | {
    type: 'ADD_ITEM'
    payload: {
      item: Item
    }
  }
  | {
    type:
      | 'DECREMENT_ITEM_QUANTITY'
      | 'INCREMENT_ITEM_QUANTITY'
      | 'REMOVE_ITEM'
    payload: {
      itemId: Item['id']
    }
  }
  | {
    type: 'CHECKOUT_CART'
    payload: {
      order: OrderInfo
      callback: NavigateFunction
    }
  }

interface CartContextType {
  cart: Item[],
  orders: Order[],
  addItem: (item: Item) => void,
  removeItem: (itemId: Item['id']) => void,
  incrementItemQuantity: (itemId: Item['id']) => void,
  decrementItemQuantity: (itemId: Item['id']) => void,
  checkout: (order: OrderInfo) => void,
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  function cartReducer(state: CartState, action: Actions): CartState {
    switch (action.type) {
      case 'ADD_ITEM':
        return produce(state, (draft) => {
          const itemAlreadyAdded = draft.cart.find(
            (item) => item.id === action.payload.item.id,
          )
          if (itemAlreadyAdded) {
            itemAlreadyAdded.quantity += action.payload.item.quantity
          } else {
            draft.cart.push(action.payload.item)
          }
        })

      case 'REMOVE_ITEM':
        return produce(state, (draft) => {
          const itemToRemoveId = draft.cart.findIndex(
            (item) => item.id === action.payload.itemId,
          )
          draft.cart.splice(itemToRemoveId, 1)
        })

      case 'INCREMENT_ITEM_QUANTITY':
        return produce(state, (draft) => {
          const itemToIncrement = draft.cart.find(
            (item) => item.id === action.payload.itemId,
          )

          if (itemToIncrement?.id) {
            itemToIncrement.quantity += 1
          }
        })

      case 'DECREMENT_ITEM_QUANTITY':
        return produce(state, (draft) => {
          const itemToDecrement = draft.cart.find(
            (item) => item.id === action.payload.itemId,
          )

          if (itemToDecrement?.id && itemToDecrement?.quantity > 1) {
            itemToDecrement.quantity -= 1
          }
        })

      case 'CHECKOUT_CART':
        return produce(state, (draft) => {
          const newOrder = {
            id: new Date().getTime(),
            items: state.cart,
            ...action.payload.order,
          }
          draft.orders.push(newOrder)
          draft.cart = []

          action.payload.callback(`/success/${newOrder.id}`)
        })

      default:
        return state
    }
  }

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item,
      },
    })
  }
  function removeItem(itemId: Item['id']) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        itemId,
      },
    })
  }
  function incrementItemQuantity(itemId: Item['id']) {
    dispatch({
      type: 'INCREMENT_ITEM_QUANTITY',
      payload: {
        itemId,
      },
    })
  }
  function decrementItemQuantity(itemId: Item['id']) {
    dispatch({
      type: 'DECREMENT_ITEM_QUANTITY',
      payload: {
        itemId,
      },
    })
  }
  function checkout(order: OrderInfo) {
    dispatch({
      type: 'CHECKOUT_CART',
      payload: {
        order,
        callback: navigate,
      },
    })
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      incrementItemQuantity,
      decrementItemQuantity,
      orders,
      checkout,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
