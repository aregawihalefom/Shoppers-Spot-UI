import axios from 'axios'
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
