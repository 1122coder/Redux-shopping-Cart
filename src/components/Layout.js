import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Layout = () => {
  const total = useSelector(state=> state.cart.totalPrice);
  const showCart = useSelector(state => state.cart.showCart)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <div>
          <button className="orderBtn" onClick={handleOpen}>Place Order</button>
                  <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Dear Customer! Order Successfully Placed
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Thanks for Shopping here. We await you soon again. Happy Shopping
                  </Typography>
                </Box>
              </Modal>
          </div>
          
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
