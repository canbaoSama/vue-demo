<style>
.card-list {
  width: 100%;
  margin: 0 auto;
  max-width: 1220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-list:before,.card-list:after {
  display: none;
}
.card-li {
  width: 31%;
  position: relative;
  overflow: hidden;
}
.card-info {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 10%;
  text-align: center;
  z-index: 1;
}
.card-info-title {
  padding: 10px 30px;
  background-color: rgba(0,0,0,0.5);
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: inline-block;
  border-radius: 4px;
}
.card-img {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.card-img img {
  width: 100%;
  transition: all 0.8s;
}
.card-li:hover .card-img img {
  transform: scale(1.1);
}
.rank-num {
  position: absolute;
  top: 17px;
  right: -28px;
  transform: rotate(45deg);
  width: 120px;
  text-align: center;
  height: 30px;
  background-color: #ffca54;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.rank-num img {
  width: 18px;
  height: 18px;
  color: #ff0c00;
}
@media screen and (max-width: 1199px) and (min-width: 1025px){
  .card-list {
    max-width: 1000px;
  }
  .rank-num {
    height: 26px;
  }
  .rank-num img {
    width: 16px;
    height: 16px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px){
  .card-list {
    max-width: 768px;
    padding: 0 15px;
  }
  .card-info-title {
    font-size: 14px;
    padding: 6px 20px;
  }
  .rank-num {
    top: 15px;
    right: -23px;
    width: 100px;
    height: 24px;
  }
  .rank-num img {
    width: 15px;
    height: 15px;
  }
}
@media screen and (max-width: 767px) {
  .card-list {
    max-width: 420px;
    width: calc(100% - 48px);
  }
  .card-li {
    width: 100%;
  }
  .card-li:not(:first-child) {
    margin-top: 24px;
  }
}
</style>
<template>
<!--  <Row class="the-outermost-container">-->
<!--    <myButton type="primary">按钮</myButton>-->
<!--    <Select v-model="selectNum" multiple>-->
<!--      <Option value="1">1</Option>-->
<!--      <Option value="2">2</Option>-->
<!--      <Option value="3">3</Option>-->
<!--      <Option value="4">4</Option>-->
<!--    </Select>-->
<!--    <Input v-bind:placeholder="message" ></Input>-->
<!--    message is :{{message}}-->
<!--    selectNum is :{{selectNum}}-->
<!--  </Row>-->
  <div class="card-list">
    <div class="card-li">
      <div class="rank-num">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
      </div>
      <div class="card-info">
        <span class="card-info-title">排名第一</span>
      </div>
      <div class="card-img">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/60a1e87f79151_60a1e87fbbb2a-2.jpg" />
      </div>
    </div>
    <div class="card-li">
      <div class="rank-num">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
      </div>
      <div class="card-info">
        <span class="card-info-title">排名第一</span>
      </div>
      <div class="card-img">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/60a1e87f79151_60a1e87fbbb2a-2.jpg" />
      </div>
    </div>
    <div class="card-li">
      <div class="rank-num">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/fire.png" />      </div>
      <div class="card-info">
        <span class="card-info-title">排名第一</span>
      </div>
      <div class="card-img">
        <img src="http://www.mtcfocus.com/wp-content/uploads/2021/05/60a1e87f79151_60a1e87fbbb2a-2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home.vue',
    data() {
      return {
        message: '',
        selectNum: []
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
    created () {
    },
    mounted () {
      console.log(this.$el);
    }
  }
</script>
