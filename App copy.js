import React, {useState,useEffect} from 'react'
import {Button, StyleSheet, Text, View, Image} from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import SplashScreen from 'react-native-splash-screen'

export default function App () {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const [image, setImage] = useState(null)
  function open () {}
  function gotoCamera () {
    ImagePicker.launchCamera(
      {
        title: 'Select QR Code',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        mediaType: 'photo',
      },
      response => {
        console.log('Response = ', response)
        if (response.didCancel) {
          console.log('User cancelled image picker') //khong chon anh
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error)
          Alert.alert('Error', response.error)
        } else {
          // process image here
          console.log(response)
          setImage(response.assets[0])
        }
      },
    )
  }
  function gotoLibary () {
    ImagePicker.launchImageLibrary(
      {
        title: 'Select QR Code',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        mediaType: 'photo',
      },
      response => {
        console.log('Response = ', response)
        if (response.didCancel) {
          console.log('User cancelled image picker') //khong chon anh
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error)
          Alert.alert('Error', response.error)
        } else {
          console.log(response)
        }
      },
    )
  }
  function submit () {
    let formData = new FormData()

    formData.append('image_file', {
      uri: image?.uri,
      name: image?.fileName,
      type: image?.type,
    })
    formData.append('image_label', "PhamTranQuangHa")
    fetch('http://192.168.1.250:3006/put_image_dataset', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(e => console.log(e))
      .catch(err => console.log(err))
  }
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      {image && (
        <Image
          style={{width: 300, height: 300, resizeMode: 'contain'}}
          source={{uri: image?.uri}}
        />
      )}
      <ButtonC title='Đi đến máy ảnh' onPress={gotoCamera} />
      <ButtonC title='Đi đến Thư viện' onPress={gotoLibary} />
      <ButtonC title='Send ' onPress={submit} />
    </View>
  )
}

const ButtonC = ({title, onPress}) => {
  return (
    <View style={{margin: 10, width: 300}}>
      <Button title={title} onPress={onPress} />
    </View>
  )
}
