import React, { useState } from "react";
import { useCart } from "./context/CartProvider";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function QuickShop({ product, isVisible }) {
  const { updateCart } = useCart();
  const [open, setOpen] = useState(false);

  const quickAddToCart = () => {
    product["quantity"] = 1;
    updateCart(product);
    setOpen(false);
  };

  return (
    <Modal
      id={product.id}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Quick Shop</Button>}
    >
      <Modal.Content image>
        <Image size="medium" src={product.image} wrapped />
        <Modal.Description>
          <Header>{product.title}</Header>
          <p>{product.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Continue Shopping
        </Button>
        <Button
          content="Add To Cart"
          labelPosition="right"
          icon="shopping cart"
          onClick={(e) => quickAddToCart()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}
