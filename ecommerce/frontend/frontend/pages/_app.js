import CartProvider, { cartcontext } from '@/components/CartProvider'
import '@/styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
import React, { useContext, useEffect } from 'react';
export default function App({ Component, pageProps }) {
  
  return (
    <React.StrictMode>
  <CartProvider ><Component {...pageProps} /></CartProvider></React.StrictMode>
  )
}
