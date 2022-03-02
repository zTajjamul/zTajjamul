import Products from '@/data/mockData/products'

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      return this.message
    }
  },
  mounted () {
    this.products = Products
  }
}
