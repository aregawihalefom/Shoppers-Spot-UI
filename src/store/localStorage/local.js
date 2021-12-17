import axios from 'axios'
class  storage{

   constructor(){
      this.storageType = window.localStorage
   }

   setItem = (key, value) => {
      this.storageType.setItem(key, JSON.stringify(value))
  }
  
   getItem = (key) => {
     return   JSON.parse(this.storageType.getItem(key))
  }
  
   clearStorage = () =>{ 
     return  this.storageType.clear()
  }
  removeItem = (key) =>{
   return this.storageType.removeItem(key)
  }

}
export let storeageUtil = new storage()
