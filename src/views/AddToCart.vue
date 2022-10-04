<template>
  <div class="p-3">
    <h2 class="my-3">Your Shopping Cart</h2>
    <div class="cart-list">
        <div class="cart d-flex justify-content-around align-items-center">
            <img src="../assets/pizza.jpg" alt="">
            <h5>This is title</h5>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-outline-dark">+</button>
                <span class="my-2">01</span>
                <button class="btn btn-outline-dark">-</button>
            </div>
            <h6>Price: $ 500</h6>
            <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
        </div>
        <div class="cart d-flex justify-content-around align-items-center">
            <img src="../assets/pizza.jpg" alt="">
            <h5>This is title</h5>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-outline-dark">+</button>
                <span class="my-2">01</span>
                <button class="btn btn-outline-dark">-</button>
            </div>
            <h6>Price: $ 500</h6>
            <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
        </div>
        <div class="cart d-flex justify-content-around align-items-center">
            <img src="../assets/pizza.jpg" alt="">
            <h5>This is title</h5>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-outline-dark">+</button>
                <span class="my-2">01</span>
                <button class="btn btn-outline-dark">-</button>
            </div>
            <h6>Price: $ 500</h6>
            <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
        </div>
        <div class="cart d-flex justify-content-around align-items-center">
            <img src="../assets/pizza.jpg" alt="">
            <h5>This is title</h5>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-outline-dark">+</button>
                <span class="my-2">01</span>
                <button class="btn btn-outline-dark">-</button>
            </div>
            <h6>Price: $ 500</h6>
            <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
        </div>
        <div class="cart d-flex justify-content-around align-items-center">
            <img src="../assets/pizza.jpg" alt="">
            <h5>This is title</h5>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-outline-dark">+</button>
                <span class="my-2">01</span>
                <button class="btn btn-outline-dark">-</button>
            </div>
            <h6>Price: $ 500</h6>
            <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
        </div>
        
    </div>
    
    <div class="bottom-nav">
        <p class="text-primary mb-0">Back to Shop</p>
        <h5>Total </h5>
        <span>$ 8000</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cart-list{
    overflow: scroll;
}
.cart{
    max-width: 700px;
    margin: 10px 30px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border: 1px solid rgba(255, 255, 255, 0.28);
}
.cart img{
    width: 200px;
    height: 130px;
    border-radius: 10px;
}
.delete-icon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
}
.delete-icon .icon{
    position: relative;
    top: -6px;
    right: -3px;
}
.bottom-nav{
    position: sticky;
    bottom: 0;
    max-width: 700px;
    margin: 10px 30px;
    padding: 5px 0px;
    background-color: aquamarine;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
}
</style>