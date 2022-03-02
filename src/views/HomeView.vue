<template>
  <HomePageBanner />
  <Featured />
  <ProductQuality />
  <SubscribeForm />
</template>

<script>
import HomePageBanner from '../components/ui/home/HomepageBanner.vue'
import Featured from '../components/ui/home/Featured.vue'
import ProductQuality from '../components/ui/home/GeneralSection.vue'
import SubscribeForm from '../components/ui/home/MemberShip.vue'

export default {
  name: 'home-view',
  components: {
    HomePageBanner,
    Featured,
    ProductQuality,
    SubscribeForm
  }
}
</script>
