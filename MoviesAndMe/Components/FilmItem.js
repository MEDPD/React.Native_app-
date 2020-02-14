import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'

class FilmItem extends React.Component{
    render(){
        const film = this.props.film;
       return(
            <View style={styles.main_container}>
                  <Image style={styles.item_image}></Image>
                  <View style={styles.item_text}>
                      <View style={styles.item_title}>
                         <Text style={styles.film_title}>{film.title}</Text>
                         <Text style={styles.film_vote}>{film.vote_average}</Text>
                      </View>
                      <View  style={styles.item_description}>
                          <Text numberOfLines={3}>{film.overview }</Text>
                      </View>
                      <View  style={styles.item_date}>
                         <Text style={styles.date}>{film.release_date}</Text>
                      </View> 
                  </View>
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        main_container:{
            height: 120,
            marginTop:10,
            marginLeft:20,
            marginRight:20,
            backgroundColor:'blue',
            flexDirection:'row',
        },
        item_image : {
            flex:.2,
            backgroundColor:'beige',
        },
        item_text :{
            flex:0.8,
            backgroundColor:'whitesmoke',
        },
        item_title:{
              flex:.3,
              backgroundColor:'black',
              paddingTop:5,
              paddingLeft:10,
              flexDirection: 'row',
        },
        film_title:{
            color:'white',
            fontSize:21,
            fontFamily:'Cochin',
             flex:.7,
             flexWrap:'wrap',
            // backgroundColor: 'violet'   
        },
        film_vote:{
            color:'white',
             flex:.3,
             textAlign:'center',
             paddingTop:0,
             fontSize:18,
        },
        item_description:{
            flex:.5,
            opacity:.5,
        },
        item_date:{
           flex:.2, 
        },
        date:{
            paddingRight:10,
            paddingTop:2,
            textAlign:'right',  
        },

    }
)

export default FilmItem