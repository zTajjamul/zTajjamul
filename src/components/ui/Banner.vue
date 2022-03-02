<template>
  <section class='banner'>
    <div class="container p-5">
      <div class="row pt-5">
        <div class="col-12 text-center">
          <h1>{{page}}</h1>
        </div>
       </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-banner',
  props: ['page']
}
</script>

<style scoped lang='scss'>
  section {
    &.banner{
      background: #a9b7b5;
    }
  }
</style>
