import React, {useEffect, useState, useContext} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import img from '../img/index'
import {AppContext} from './AppContext'
import { useNavigation } from '@react-navigation/native';

export default function Weather () {
  const {cityName, setCityName, background, setBackground} = useContext(
    AppContext,
  )
  const API = '283820dd057b284131ca2b5c179cd169'
  const host = 'https://api.openweathermap.org/data/2.5/weather'
  useEffect(() => {
    useFetch()
  }, [cityName, isSearch])
  const useFetch = () => {
    fetch(host + '?q=' + cityName + '&appid=' + API + '&lang=vi')
      .then(response => response.json())
      .then(data => {
        setValues(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const setValues = data => {
    setData(data), setWeather(data.weather[0]), setCoord(data.coord)
    setMain(data.main)
    setWind(data.wind)
    setClouds(data.clouds)
    setId(data.id)
    setName(data.name)
  }
  const [data, setData] = useState([])
  const [coord, setCoord] = useState([])
  const [weather, setWeather] = useState([])
  const [main, setMain] = useState([])
  const [wind, setWind] = useState([])
  const [clouds, setClouds] = useState([])
  const [id, setId] = useState([])
  const [name, setName] = useState([])

  const [isSearch, setIsSearch] = useState(false)
  const cityData = [
    {id: 1, name: 'Hanoi'},
    {id: 2, name: 'Lao'},
    {id: 3, name: 'London'},
    {id: 4, name: 'Thailand'},
    {id: 5, name: 'Tokyo'},
    {id: 6, name: 'Hongkong'},
    {id: 7, name: 'America'},
  ]

  const ViewItem = ({item}) => {
    const setImg = name => {
      if (name === 'Hanoi') return setBackground(img.imgHanoi)
      if (name === 'London') return setBackground(img.imgLondon)
      if (name === 'Lao') return setBackground(img.imgLao)
      if (name === 'Thailand') return setBackground(img.imgThaiLand)
      if (name === 'Tokyo') return setBackground(img.imgTokyo)
      if (name === 'Hongkong') return setBackground(img.imgHongkong)
      if (name === 'America') return setBackground(img.imgAmerica)
    }
    return (
      <View key={item.id}>
        <TouchableOpacity
          style={styles.viewItem}
          onPress={() => {
            setCityName(item.name)
            setIsSearch(!isSearch)
            setImg(item.name)
            return useFetch()
          }}>
          <Text style={{color: '#FF00D4'}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
const navigation=useNavigation()
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#ccc' barStyle='dark-content' />
        <ImageBackground
          style={styles.imageBackground}
          source={{uri: background}}>
          {!isSearch && (
            <View style={styles.viewSearch}>
              <View style={styles.search}>
                <Text style={{fontSize: 23, color: '#FF6600'}}>
                  Th???i Ti???t {name}
                </Text>
              </View>
              <Ionicons
              onPress={() => {
                setIsSearch(!isSearch);
              }}
              name="search"
              color="red"
              size={40}
            />
             <Ionicons
                name="logo-youtube"
                style={{ position: "absolute", right: 5, top: 4 }}
                size={40}
                color="red"
                onPress={() => {
                  navigation.navigate("Sos")
                }}
              />
            </View>
          )}
          {isSearch && (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.viewSearch}>
                <View style={styles.search}>
                  <TextInput
                    placeholder='Click here to search'
                    style={{fontSize: 18, minWidth: 200}}
                    value={cityName}
                    onChangeText={text => setCityName(text)}
                  />
                </View>

                <Ionicons
                name="search"
                //style={{ position: "absolute", right: 0, top: 1 }}
                size={40}
                color="yellow"
                onPress={() => {
                  setIsSearch(!isSearch);

                  return useFetch();
                }}
              />
             
              </View>
              <View style={{marginHorizontal: 20, marginVertical: 8}}>
                <FlatList
                  data={cityData}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  horizontal={true}
                  renderItem={({item}) => <ViewItem item={item} />}
                />
              </View>
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.temperature}>
              <Text style={{fontSize: 70, color: 'red'}}>
                {Math.ceil(main.temp - 273)}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF57',
                minWidth: 100,
                minHeight: 100,
                alignItems: 'center',
                borderRadius: 10,
                padding: 10,
                margin: 5,
              }}>
              <Image
                tintColor='red'
                source={{
                  uri:
                    'http://openweathermap.org/img/wn/' +
                    weather.icon +
                    '@2x.png',
                }}
                style={{width: 100, height: 100, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#FF4800',
                  backgroundColor: '#fff',
                }}>
                {weather.description}
              </Text>
            </View>
          </View>

          <View style={styles.details}>
          <View style={styles.contentChild}>
            <Image
              style={{ width: 100, resizeMode: "contain" }}
              source={{ uri: background }}
            />
            <Text style={styles.font}>
              Th??nh Ph???:
              <Text style={{ fontSize: 30, color: "red" }}>{name}</Text>
            </Text>
            <Text style={styles.font}>??p su???t:{main.pressure} hPa</Text>
            <Text style={styles.font}>
              ????? ???m:
              <Text style={{ fontSize: 30 }}>{main.humidity}%</Text>
            </Text>
            <Text style={styles.font}>T???c ????? gi??:{wind.speed} m??t / gi??y</Text>
            <Text style={styles.font}>H?????ng gi??:{wind.deg}</Text>
            <Text style={styles.font}>M??y:{clouds.all}</Text>
          </View>
        </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}
