import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import { useStateContext } from '../context/StateContext';
import { useState } from 'react';
import Product from '../components/Product';
import slug from '../pages/product/[slug]';
import { createOrder } from '../lib/orderHandler';

export default function Order({opened, setOpened, PaymentMethod}) {
  const theme = useMantineTheme();
  const [FormData, setFormData] = useState({});
  const handleInput = (e) => {
    setFormData({...FormData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({...FormData, totalPrice, totalQuantities})
    console.log('Order Placed', id)
  }
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, } = useStateContext();
  return(
    <Modal
    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
    overlayOpacity={0.55}
    overlayBlur={3}
    opened={opened}
    onClose={() => setOpened(null)}>
      <form onSubmit={handleSubmit} className=''>
        <input onChange={handleInput} type='text' name='full name' required placeholder='Full Name' />
        <input onChange={handleInput} type='text' name='phone' required placeholder='Phone Number' />
        <textarea onChange={handleInput} name='address' rows={3} placeholder='Address' />
        <span>
          You Will Pay {totalPrice} DZD
        </span>
        <button type='submit' className='btn'>Place Order</button>
      </form>
    </Modal>
  )
};