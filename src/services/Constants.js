
export const APP_CONFIG = {
    data: {
      TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZWFuIiwiaWF0IjoxNjM5MzIzNDg5LCJleHAiOjE2MzkzNDE0ODl9.vPVu0nkmSPyq7LfReLsMUq6ahErIAWDWmoGMGyWo__k',
      API_BASE_URL: 'http://localhost:8888/api',
    }
  }
  

  export const paymentMethods = {
    API: {
      token: 'STRIPE',
      API_BASE_URL: 'http://localhost:8888/api',
    },
    PAYPAL: {
      key: 'PAYPAL',
      value: 2,
      title: 'Paypal Payment',    
    },
    AMAZON_PAYMENT: {
      key: 'AMAZON_PAYMENT',
      value: 3,
      title: 'Amazon Payment',    
    }
  }

 export const shippingMethods = {
    SKYNET: 'SKYNET',
    GDEX: 'GDEX',
    DHL: 'DHL',
    UPS: 'UPS',
  }