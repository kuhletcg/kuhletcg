---
Layout: post
Title: How to set up online payments using react
Date: 2021-03-01
---

# Introdution - How to set up payments in react.

First, you’d need to install the package, You can do this by running the code below in your terminal (in the root of your react-native project).
$ npm install react-native-haystack-review

# body

## Solution

import PaystackWebView from 'react-native-paystack-webView'
import React, { Component } from 'react'
import { View } from 'react-native'

class MyApp extends Component {
render () {
return (
<View>
<PaystackWebView
buttonText='Pay Now'
paystackKey='<your-key-here>'
amount={120000}
billingEmail='ayoshokz@gmail.com'
billingMobile='08101274387'
billingName='Oluwatobi Shokunbi'
ActivityIndicatorColor='green'
onSuccess={(tranRef)=>{console.log(tranRef)}}
onCancel={()=>{console.log('something went wrong')}}
/>
</View>
)
}
}

# Conclusion

Handling card payment in your react native application is easy as it can be with these packages, allowing you to concentrate on the more important part of your application.
