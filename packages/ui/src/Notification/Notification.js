import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import {
  AiOutlineInfo,
  AiOutlineExclamation,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';
import Flex from '../Flex';
import IconButton from '../IconButton';
import Heading from '../Heading';
import Text from '../Text';

function Notification(props) {
  const theme = useTheme();

  const {
    id,
    title,
    description,
    onClose,
    isDismissable,
    variant,
    ...rest
  } = props;

  function getIconVariant() {
    switch (variant) {
      case 'success':
        return <AiOutlineCheck color="#fff" />;
      case 'warn':
      case 'danger':
        return <AiOutlineExclamation color="#fff" />;
      default:
        return <AiOutlineInfo color="#fff" />;
    }
  }

  return (
    <Flex
      py={4}
      maxWidth={19}
      borderLeft="solid 5px"
      borderLeftColor={theme.colors[variant]['main']}
      borderRadius="md"
      boxShadow="md"
      background="white"
    >
      <Flex direction="column" align="center" justify="flex-start" p={5} pb={1}>
        <Flex
          height={5}
          width={5}
          bg={theme.colors[variant]['main']}
          align="center"
          justify="center"
          borderRadius="full"
        >
          {getIconVariant()}
        </Flex>
      </Flex>
      <Flex direction="column" grow={1}>
        <Heading as="h3" mb={3}>
          {title}
        </Heading>
        <Text size="sm">{description}</Text>
      </Flex>
      <Flex direction="column" align="center" justify="flex-start" p={5}>
        {isDismissable ? (
          <IconButton
            icon={AiOutlineClose}
            color={theme.colors.text}
            onClick={onClose}
            mt="-16px"
            size="md"
          />
        ) : null}
      </Flex>
    </Flex>
  );
}

Notification.displayName = 'Notification';

Notification.defaultProps = {
  isDismissable: true,
  variant: 'info',
};

Notification.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isDismissable: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warn',
    'danger',
  ]),
};

export default Notification;
