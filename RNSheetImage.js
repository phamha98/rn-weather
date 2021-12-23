// import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react'

// import {ViewCore} from './ViewCore'
// import * as ImagePicker from 'react-native-image-picker'

// import {Alert, Button} from 'react-native'
// export default function RNSheetImage () {

  
//   const gotoCamera = async () => {
//     // ImagePicker.launchCamera(
//     //   {
//     //     title: 'Select QR Code',
//     //     storageOptions: {
//     //       skipBackup: true,
//     //       path: 'images',
//     //     },
//     //     mediaType: 'photo',
//     //   },
//     //   response => {
//     //     console.log('Response = ', response)
//     //     if (response.didCancel) {
//     //       console.log('User cancelled image picker') //khong chon anh
//     //     } else if (response.error) {
//     //       console.log('ImagePicker Error: ', response.error)
//     //       Alert.alert('Error', response.error)
//     //     } else {
//     //       // process image here
//     //       setImage(response.assets[0])
//     //       callBackImage(response)
//     //     }
//     //   },
//     // )
//   }
//   const gotoLibary = () => {
//   //   ImagePicker.launchImageLibrary(
//   //     {
//   //       title: 'Select QR Code',
//   //       storageOptions: {
//   //         skipBackup: true,
//   //         path: 'images',
//   //       },
//   //       mediaType: 'photo',
//   //     },
//   //     response => {
//   //       console.log('Response = ', response)
//   //       if (response.didCancel) {
//   //         console.log('User cancelled image picker') //khong chon anh
//   //       } else if (response.error) {
//   //         console.log('ImagePicker Error: ', response.error)
//   //         Alert.alert('Error', response.error)
//   //       } else {
//   //         setImage(response.assets[0])
//   //         callBackImage(response)
//   //       }
//   //     },
//   //   )
//   }

//   return (
//     <ViewCore alignItems minHeight={400}>
//       <Button title='Đi đến máy ảnh' onPress={gotoCamera} />
//       <Button title='Đi đến Thư viện' onPress={gotoLibary} />
//     </ViewCore>
//   )
// }
