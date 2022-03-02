<template>
  <section class="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>GET <span>UPDATED</span></h2>
          <p>Lorem ipsum dolor sit amet. Et fuga ipsa ea architecto animi quo dolor repellat est laboriosam reprehenderit vel illo quidem in nihil itaque. </p>
             <p>Lorem ipsum dolor sit amet. Et fuga ipsa ea architecto animi quo dolor repellat est laboriosam. </p>
        </div>
      </div>
      <form class="row px-5 pt-3" @submit.prevent="showData">
        <div class="col-md-6">
          <input v-model="name" type="text" class="form-control" placeholder="Full name">
        </div>
        <div class="col-md-6" >
          <input v-model="email" type="email" class="form-control" placeholder="email">
        </div>
        <div class="col-12 mt-2">
          <textarea v-model="comment" class="form-control" placeholder="Write comment ..." rows="9"></textarea>
        </div>
        <input type="submit" class="btn btn-danger" value='Submit'>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'membership-form',
  data () {
    return {
      name: '',
      email: '',
      comment: ''
    }
  },
  methods: {
    showData () {
      alert(JSON.stringify(this.$data))
    }
  }
}
</script>

<style scoped lang='scss'>
  p{
    color: #6c757d;
    font-size: 14px;
    margin: 0px;
  }
  input[type=submit]{
    margin: 12px auto;
    padding: 8px 50px;
    width: fit-content;
  }
</style>
