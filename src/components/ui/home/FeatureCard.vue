<template>
  <div class="col-md-4">
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
  .featured-card {
    background: linear-gradient(-85deg, #1e2934, #401519);
    color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: #cccccc 3px 4px 10px 1px;
    &:hover {
      transform: scale(1.1);
      transition: all ease 0.5s;
      background: linear-gradient(85deg, #1e2934, #401519);
    }
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
</style>>
