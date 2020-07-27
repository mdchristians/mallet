import * as React from 'react';
import Notification from '../Notification';
import { useToast } from './ToasterProvider';
import { noop } from '../utils';
import { motion } from 'framer-motion';
import Box from '../Box';

const StyledToast = motion.custom(Box);

const Toast = ({
  id,
  title,
  description,
  autoDismiss,
  isDismissable,
  duration,
  type,
  variant,
}) => {
  const { removeToast } = useToast();
  const handleClose =
    isDismissable || !autoDismiss ? () => removeToast(id) : noop;

  // Start the timer when mounted
  React.useEffect(() => {
    if (autoDismiss) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  return (
    <StyledToast
      marginBottom={4}
      maxWidth="600px"
      padding={3}
      initial={{ opacity: 0, translateY: '-100vh', scale: 0.25 }}
      animate={{
        opacity: 1,
        translateY: 0,
        scale: 1,
        zIndex: 1,
        transitionEnd: {
          zIndex: 'unset',
        },
      }}
      exit={{
        opacity: 0,
        translateY: '-100vh',
        transition: { duration: 0.25 },
      }}
      positionTransition
    >
      <Notification
        isToast
        id={id}
        title={title}
        description={description}
        isDismissable={isDismissable || !autoDismiss}
        onClose={handleClose}
        type={type}
        variant={variant}
      />
    </StyledToast>
  );
};

Toast.defaultProps = {
  autoDismiss: true,
  duration: 50000,
  isDismissable: true,
  type: 'default',
  variant: 'info',
};

export default Toast;
