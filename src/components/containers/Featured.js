import Products from '@/data/mockData/products'

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      return this.products
    }
  },
  mounted () {
    this.products = Products.filter(o => o.category === 'featured')
  }
}
