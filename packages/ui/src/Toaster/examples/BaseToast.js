import React from 'react';
import Button from '../../Button';
import { useToast } from '../ToasterProvider';

function BaseToast() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast({
      title: 'Hello World',
      description: 'foo',
    });
  };

  return <Button onClick={handleClick}>Launch Toast!</Button>;
}

export default BaseToast;
