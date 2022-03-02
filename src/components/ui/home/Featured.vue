<template>
  <section class="featured">
    <div class="container">
    <div class="row">
      <div class="col-12 text-center pb-4" >
        <h2>FEATURED <span>PRODUCTS</span></h2>
      </div>
    </div>
    <div class="row">
      <FeaturedCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
    </div>
  </section>
</template>

<script>
import FeaturedCard from './FeatureCard.vue'
import FeaturedMixin from '../../containers/Featured'

export default {
  name: 'featured-products',
  mixins: [FeaturedMixin],
  components: {
    FeaturedCard
  },
  methods: {
    getMessage () {
      console.log(this.products[0].name)
    }
  }
}
</script>
