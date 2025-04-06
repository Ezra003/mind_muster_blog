/**
 * A custom hook and utility functions for managing toast notifications in a React application.
 * Inspired by react-hot-toast library but with custom modifications.
 */

"use client"

// Import React and necessary types
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

/**
 * Configuration constants for the toast system
 */
const TOAST_LIMIT = 1 // Maximum number of toasts that can be shown at once
const TOAST_REMOVE_DELAY = 1000000 // Delay before automatically removing dismissed toasts

/**
 * Interface for a toast notification
 * @property id - Unique identifier for the toast
 * @property title - Optional title for the toast
 * @property description - Optional description content
 * @property action - Optional action element (like a button)
 */
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

/**
 * Action types for the toast reducer
 */
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// Counter for generating unique toast IDs
let count = 0

/**
 * Generates a unique ID for a new toast
 * @returns A unique string identifier
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Type definitions for actions and state
/**
 * Type for the action types
 */
type ActionType = typeof actionTypes

/**
 * Union type for all possible actions that can be dispatched
 */
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

/**
 * Interface representing the state of the toast system
 */
interface State {
  toasts: ToasterToast[]
}

// Map to store timeouts for auto-removal of dismissed toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

/**
 * Adds a toast to the removal queue after a delay
 * @param toastId - The ID of the toast to remove
 */
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

/**
 * Reducer function that handles all toast state changes
 * @param state - Current state of the toast system
 * @param action - Action to be performed
 * @returns New state after applying the action
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Handle side effects of dismissing toasts
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// Array to store state change listeners
const listeners: Array<(state: State) => void> = []

// Initial state with no toasts
let memoryState: State = { toasts: [] }

/**
 * Dispatches an action to update the toast state
 * @param action - The action to be dispatched
 */
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

/**
 * Type for a toast without its ID (used for creating new toasts)
 */
type Toast = Omit<ToasterToast, "id">

/**
 * Main toast function that creates and manages toasts
 * @param props - Properties for the new toast
 * @returns Object containing methods to control the toast
 */
function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

/**
 * Custom hook for managing toasts in React components
 * @returns Object containing:
 * - Current state of all toasts
 * - toast: Function to create new toasts
 * - dismiss: Function to dismiss specific or all toasts
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
