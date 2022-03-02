<template>
  <section class="general">
    <div class="container">
      <div class="quality pt-5">
        <img src='../../../assets/home/fashion.jpg'>
        <div class="text">
          <h2>PRODUCTS <span>QUALITY</span></h2>
          <p>Lorem ipsum dolor sit amet. Et fuga ipsa ea architecto animi quo dolor repellat est laboriosam reprehenderit vel illo quidem in nihil itaque. Ut natus molestiae qui obcaecati blanditiis et molestiae eius ea sequi alias est magnam explicabo qui temporibus totam ut assumenda debitis.</p>
          <p>Hic voluptate architecto ea ullam accusantium est fuga tenetur cum minima tempora. Ut architecto tenetur sed possimus illum non dignissimos unde ex quibusdam eligendi ut excepturi praesentium et doloremque repudiandae. Aut doloremque sequi et illum voluptate est sunt saepe 33 optio dolorem. Et provident reprehenderit ut porro doloremque qui beatae rerum aut enim laudantium.</p>
          <p>Est iste libero et voluptates voluptatibus aut delectus asperiores. Aut vitae impedit sed minus iste ut odit galisum qui quia reiciendis aut animi error. Quo vero fuga ea pariatur aperiam aut adipisci odio ad optio quia.</p>
          <p>Lorem ipsum dolor sit amet. Et fuga ipsa ea architecto animi quo dolor repellat est laboriosam reprehenderit vel illo quidem in nihil itaque. Ut natus molestiae qui obcaecati blanditiis et molestiae eius ea sequi alias est magnam explicabo qui temporibus totam ut assumenda debitis.</p>
          <p>Hic voluptate architecto ea ullam accusantium est fuga tenetur cum minima tempora. Ut architecto tenetur sed possimus illum non dignissimos unde ex quibusdam eligendi ut excepturi praesentium et doloremque repudiandae. Aut doloremque sequi et illum voluptate est sunt saepe 33 optio dolorem. Et provident reprehenderit ut porro doloremque qui beatae rerum aut enim laudantium.</p>
          <p>Est iste libero et voluptates voluptatibus aut delectus asperiores. Aut vitae impedit sed minus iste ut odit galisum qui quia reiciendis aut animi error. Quo vero fuga ea pariatur aperiam aut adipisci odio ad optio quia.</p>
          <p>Lorem ipsum dolor sit amet. Et fuga ipsa ea architecto animi quo dolor repellat est laboriosam reprehenderit vel illo quidem in nihil itaque. Ut natus molestiae qui obcaecati blanditiis et molestiae eius ea sequi alias est magnam explicabo qui temporibus totam ut assumenda debitis.</p>
          <p>Est iste libero et voluptates voluptatibus aut delectus asperiores. Aut vitae impedit sed minus iste ut odit galisum qui quia reiciendis aut animi error. Quo vero fuga ea pariatur aperiam aut adipisci odio ad optio quia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'products-quality'
}
</script>

<style scoped lang='scss'>
  .quality {
    display: flex;
    flex-direction: row;
    img {
      height: 50%;
      width: auto;
      z-index: 9;
      box-shadow: #cccccc 3px 4px 10px 1px;
      border-top-left-radius: 55px;
      border-bottom-right-radius: 55px;
      &:hover{
        transform: scale(1.1);
        transition: all ease 1s;
      }
    }
    .text{
      display: block;
      margin: 3% 1% 0% -9%;
      padding: 43px 1% 14px 11%;
      border: #a32221 7px solid;
      border-top-right-radius: 55px;
      border-bottom-left-radius: 55px;
      color: #6c757d;
      font-size: 14px;
    }
  }
</style>
