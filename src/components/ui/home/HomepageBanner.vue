<template>
  <section class="banner">
    <div class="container">
      <div class="row">
         <div class="col-md-6"></div>
        <div class="col-md-6">
          <h1>WANT TO LOOK YOUR BEST?</h1>
          <h1>NEW <span>ARRIVALS</span></h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
          <button class='btn btn-danger'>Shop Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home-page-banner'
}
</script>

<style scoped lang='scss'>
.banner{
  background: url('../../../assets/home/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 18.5% 0;
  h1{
    color: #ec4a48;
    font-size: 60px;
    &:first-child{
      color: #343434;
      font-size: 25px;
      font-weight: 400;
    }
    span{
      color: #343434;
      display: block;
      line-height: 0.5;
    }
  }
  h3{
    color: #ffffff;
    font-size: 18px;
    margin-top: 2em;
    font-weight: normal;
    font-style: italic;
  }
  button{
    margin-top: 2em;
    padding: 15px 40px;
    background: #ea4947;
  }
}
</style>
