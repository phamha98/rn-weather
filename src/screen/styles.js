import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "contain",
  },
  temperature: {
    marginVertical: 10,
    width:200,
    height:200,
    backgroundColor: "#FFFFFF67",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  viewSearch: {
    marginTop: 20,
    marginHorizontal: 0,
    minHeight: 50,
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    borderBottomWidth:0.5,
    borderColor:'#fff',
    padding:5,
  },
  search: {
    backgroundColor: "#fff",
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minWidth:300
  },
  details: {
    flex: 2,
    marginTop: 30,
    alignItems: "center",
  },
  contentChild: {
    width: 300,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#F8F2F2A4",
    alignItems: "center",
  },
  font:{
    fontSize:18
  },
  viewItem:{
    backgroundColor:'#FFFFFFAB',
    minWidth:50,
    height:25,
    borderRadius:2,
    margin:3,
    padding:3,
    alignItems:'center',
    justifyContent:'center'
  },
});
export default styles;
