<template>
  <footer>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/'>Products</router-link></li>
            <li><router-link to='/'>About</router-link></li>
            <li><router-link to='/'>Contact</router-link></li>
            <li><router-link to='/'>Privacy Policy</router-link></li>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/'>Products</router-link></li>
            <li><router-link to='/'>About</router-link></li>
            <li><router-link to='/'>Contact</router-link></li>
            <li><router-link to='/'>Privacy Policy</router-link></li>
          </ul>
        </div>
        <div class="col-md-6 p-5">
          <form @submit.prevent="submitForm">
            <input type="email" v-model="email" placeholder="Enter email address" class="form-control"/>
            <input type="submit" value="Subscribe Newsletter">
          </form>
        </div>
        <div class="col-12 copyright text-center">
          <p>copyright @ 2022</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submitForm () {
      alert(this.email)
    }
  }
}
</script>

<style scoped lang='scss'>
  footer {
    background: linear-gradient(45deg, #1e2934, #401519) ;
    color: #ffffff;
    ul {
      column-count: 2;
      list-style: none;
      li {
        margin-left: -15px;
        a {
          color: #ffffff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    form {
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      overflow: hidden;
      input{
        height: 50px;
      }
      input[type=submit]{
        background-color: #a72b2a;
        border: 0px;
        color: #ffffff;
        font-size: 12px;
        padding: 5px 20px;
      }
    }
    .copyright {
      font-size: 12px;
    }
  }
</style>
