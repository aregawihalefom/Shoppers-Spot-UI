import axios from 'axios'
import { APP_CONFIG, paymentMethods } from './Constants'
class  storage{

   constructor(){
      this.storageType = window.localStorage
   }

   setItem = (key, value) => {
      this.storageType.setItem(key, JSON.stringify(value))
  }
  
   getItem = (key) => {
     return   this.storageType.getItem(key)
  }
  
   clearStorage = () =>{ 
     return  this.storageType.clear()
  }

}
export let storeageUtil = new storage()
