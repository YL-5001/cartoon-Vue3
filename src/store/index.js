import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    n:1,
    xFormData:[],
    car: [{
        region: 'qiche',
        name: 'lambergini',
        cost: '500w',
        src: require('../assets/VCG42N1336438262.mp4')
      },
      {
        region: 'qiche',
        name: 'BMW',
        cost: '30w',
        src: require('../assets/VCG42N1330709780.mp4')
      }
    ],
    ship: [{
        region: 'zhanchuan',
        name: 'waterFly',
        cost: '60w'
      },
      {
        region: 'zhanchuan',
        name: 'walkOnWater',
        cost: '30w'
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})