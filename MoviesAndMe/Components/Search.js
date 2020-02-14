import React from 'react'
import { StyleSheet,TextInput,View, Button,Text, FlatList } from 'react-native'
// import films from '../Helpers/FilmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component{
//constructeur

    constructor(props){
        super(props)
        this.state = {
            films: [],
            searchText : ""
        }
    }


 // functions

    _loadFilms() {
        if(this.state.searchText.length > 0){
            getFilmsFromApiWithSearchedText(this.state.searchText).then(data => {
                this.setState({films : data.results})
              })
        }
    }

    _getSearchText(text){
        this.setState({searchText:text})
        this._loadFilms()
    }

// c'est comme on dit main du notre Component 
    render(){
        return (
            // ici on va envoyer ce qu'on veut afficher 
            <View style={styles.container}>
                 <TextInput style={styles.Textinput} onChangeText ={ (text) => this._getSearchText(text)} placeholder='chercher un film' />
                <Button title='Rechercher'  onPress = {() => this._loadFilms()} />
                <FlatList 
                    keyExtractor = { (item) => item.id.toString() }
                    data= {this.state.films}
                    renderItem = {({item}) => <FilmItem film = {item}/> }
                />
                
                {/* <View style={{flex:.3, backgroundColor:'red'}}></View>
                <View style={{flex:.5, backgroundColor:'blue',  justifyContent:'space-around', alignItems:'center'}}>
                    <View style={{height:50, width:100, backgroundColor:'yellow' }}></View>
                    <View style={{height:50, width:100, backgroundColor:'gray' }}></View>
                </View>
                <View style={{flex:0.2, backgroundColor:'green'}}></View> */}
            </View>
        )
    }
}

    // style 
const styles = StyleSheet.create({
    container :{
        flex:1,
         backgroundColor:'yellow'
        },
    Textinput: { 
        marginTop:50,
        marginLeft: 15,
        marginRight: 15, 
        height: 40,
        borderColor: '#000000', 
        borderWidth: .5, 
        paddingLeft: 5, 
        color:'blue', 
        textAlign:'center'
    },
    k : {marginTop:50, backgroundColor:'whitesmoke'}
})
// const styles = {
//     textinput: {
//       marginLeft: 5,
//       marginRight: 5,
//       height: 50,
//       borderColor: '#000000',
//       borderWidth: 1,
//       paddingLeft: 5
//     }
//   }
export default Search