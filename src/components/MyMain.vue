<template>
  <div class="ModelBox">
    <h2>Model</h2>
    <video id="myVideo" :src="chooseVideo()" controls=true>
    </video>
  </div>
</template>

<script>
  //引入vuex
  import {useStore} from 'vuex'
  export default {
    name: 'MyMain',
    components: {},
    setup() {
      const store = useStore()
      //根据点击，更换视频地址
      const chooseVideo = () => {
          let currentVideo
          switch (store.state.n) {
            case 1:
              currentVideo = ' '
              break;
            case 2:
              currentVideo = store.state.car[0].src
              break;
            case 3:
              currentVideo = store.state.car[1].src
              break;
            case 5:
              currentVideo = store.state.ship[0].src
              break;
            case 6:
              currentVideo = store.state.ship[1].src
              break;
            case 7:
              currentVideo = store.state.car[2].src
              break;
            default:
              break;
          }
          return currentVideo
        }
        return {
          chooseVideo
        }
    }
  }
</script>

<style scoped>
  .ModelBox {
    width: 50vw;
    background-color: #fff;
  }
  #myVideo {
    width: 50vw;
    height: 50vh;
}
</style>