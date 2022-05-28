import React from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'
import { useCart } from './context/CartProvider'

export default function CartPage() {
const { cart } = useCart()



  return (
    <Container>
      <Segment
      style={{minHeight:"20em"}}
      >
        {cart &&
        cart.map(item => 
          <Header>{item.title}</Header>

          )
        }
      </Segment>
    </Container>
  )
}
