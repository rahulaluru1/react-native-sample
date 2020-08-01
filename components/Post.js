import React, { useEffect, useState } from 'react';
import {  FlatList, Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import getPost from '../redux/filters/PostFilter'
import {connect} from 'react-redux';



const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const {styles: s, constants: c} = bootstrapStyleSheet;


const Post = ({postData}) => {
   const [commments, setComments] = useState([]);
   useEffect(()=>{
      // console.log(postData)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}/comments`)
      .then((response) => response.json())
      .then((json) =>{
         //  console.log(json)
          setComments(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
},[])
  return (
   <View>
   <Text style={{fontSize:30}}>{postData.title+":"}</Text>
   <Text
          style={{fontSize:20}}
          >{postData.body}</Text>
  <Text
          style={{fontSize:15}}
          >Comments:</Text>
  
   <FlatList
    data={commments}
    keyExtractor={({ id }, index) => id.toString()}
    renderItem={({ item }) => (
      <View style={[s.card]}>
        <View style={[s.cardBody]}>
          <Text
          style={[s.text]}
          >
          {item.name}
          </Text>
          <Text
          style={[s.text]}
          >
          {item.email}
          </Text>
        </View>
      </View>
    )}
  />
</View>
  );
};

const mapStateToProps =(state,ownProps)=>{
   return {
      postData:getPost(state.posts,ownProps.route.params.postId)
   }
}
export default connect(mapStateToProps)(Post)