import { createStore } from 'vuex'

export default createStore({
  state: {
    wsj: null,
    techCrunch: null,
    USBusiness: null,
    tesla: null,
    apple: null
  },
  getters: {
    wsj(state){
      return state.wsj
    },
    techCrunch(state){
      return state.techCrunch
    },
    USBusiness(state){
      return state.USBusiness
    },
    tesla(state){
      return state.tesla
    },
    apple(state){
      return state.apple
    }
  },
  mutations: {
 setWSJ(state, wsj){
  state.wsj = wsj;
 },
 setTechCrunch(state, techCrunch){
  state.techCrunch = techCrunch
 },
 setUSBusiness(state, USBusiness){
  state.USBusiness = USBusiness
 },
 setTesla(state, tesla){
  state.tesla = tesla
 },
 setApple(state, apple){
  state.apple = apple
 }
  },
  actions: {
     fetchWSJ(content){
      return fetch('http://localhost:3500/wsj').then((response) => response.json()).then((wsj) => {
        content.commit("setWSJ", wsj.articles)
        console.log(wsj)
      }).catch((err) => {
        console.warn(err);
      })
    },
 fetchTesla(content){
  return fetch('http://localhost:3500/tesla').then((response) => response.json()).then((tesla)=> {
    content.commit("setTesla", tesla.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
 fetchUSBusiness(content){
  return fetch('http://localhost:3500/business').then((response)=> response.json()).then((usBusiness) => {
    content.commit("setUSBusiness", usBusiness.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
 fetchTechCrunch(content){
  return fetch('http://localhost:3500/tech').then((response) => response.json()).then((techCrunch) => {
    content.commit("setTechCrunch", techCrunch.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
 fetchApple(content){
    try{
      return fetch(`http://localhost:3500/apple`).then((response) => response.json()).then((apple)=>{
        content.commit("setApple", apple.articles)
      }).catch((err)=>{
        console.warn(err)
      })
    }catch(err){
      console.log(err)
    }
  }
  },
  modules: {
  }
})
