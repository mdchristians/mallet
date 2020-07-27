import React, { useState, createContext, useContext } from 'react';
import Portal from '@reach/portal';
import Toast from './Toast';
import { genId } from '../utils';
import { AnimatePresence } from 'framer-motion';
import Flex from '../Flex';

const ToastContext = createContext({});

function ToasterProvider({ children, ...props }) {
  const [toasts, setToasts] = useState([]);

  /**
   * Adds a toast to our array of toasts to display
   */
  const addToast = ({ id = genId(), ...opts }) => {
    setToasts((currentToasts) => [...currentToasts, { id, ...opts }]);
  };

  /**
   * Removes a toast from our array of toasts to display
   *
   * @param {string} id - The id of the toast to be removed
   */
  const removeToast = (id) => {
    if (toasts.length > 0) {
      setToasts((currentToasts) => {
        const updatedToasts = currentToasts.filter((t) => t.id !== id);
        return updatedToasts;
      });
    }
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <Portal>
        <Flex
          position="fixed"
          top="0"
          right="0"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding={1}
          pointerEvents="none"
        >
          <AnimatePresence>
            {toasts.map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </AnimatePresence>
        </Flex>
      </Portal>
    </ToastContext.Provider>
  );
}

const useToast = () => useContext(ToastContext);

export { useToast, ToasterProvider };
