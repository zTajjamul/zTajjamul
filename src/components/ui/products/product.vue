<template>
  <div class="col-md-6 col-lg-3 product-card text-center mb-2">
    <img :src="require('../../../assets/products/'+product.image)" :alt="product.image">
    <div class='featured-card p-4'>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: $-{{product.price }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'featured-card',
  props: ['product']
}
</script>

<style scoped lang='scss'>
 .product-card{
    &:hover {
      transform: scale(1.1);
      transition: all ease 0.5s;
      .featured-card{
          background: linear-gradient(85deg, #1e2934, #401519);
      }
    }
    img {
      width: 92%;
      height: 250px;
      border-top-left-radius: 10px;
      border: 2px solid;
      border-bottom: 0px;
      border-top-right-radius: 10px;
      box-shadow: #cccccc 8px -5px 16px 0px;
    }
    .featured-card {
      background: linear-gradient(-85deg, #1e2934, #401519);
      color: #ffffff;
      padding: 10px;
      border-radius: 10px;
      box-shadow: #cccccc 3px 4px 10px 1px;
      text-align: left;
      h3 {
        font-size: 20px;
        font-weight: 500;
        text-decoration: underline;
      }
      p {
        font-size: 16px;
        margin: 0;
        font-weight: 400;
        &:last-child {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
 }
</style>>
