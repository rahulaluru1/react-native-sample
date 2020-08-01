import React, { useEffect, useState } from 'react';
import { ActivityIndicator,Button,TextInput,SafeAreaView, FlatList, Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { connect } from 'react-redux';
import { fetchData } from '../redux';
import DashboardDataFilter from '../redux/filters/DashboardData';
import getSearchedPosts from '../redux/filters/SearchFilter'
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


const Home = ({navigation,arrayData,dispatch,isLoaded}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchName,setSearchName]=useState('');

 
  useEffect(()=>{
    dispatch(fetchData());
    setData(arrayData)
   
    setLoading(isLoaded)
  },[arrayData.length])

  function changeData(searchName){
    if(searchName===''){
      setData(arrayData)
    }
    else{
     setData(getSearchedPosts(arrayData,searchName))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
     
      {isLoading ? <View>
        <Text>
         Loading 
        </Text>
        </View>: (
          <View>
          <TextInput
            style={{height: 40}}
            placeholder="Enter a name to search..."
            onChangeText={searchName => {
              setSearchName(searchName);
              changeData(searchName);
            }}
            defaultValue={searchName}
          />
         <FlatList
          data={data}
          keyExtractor={({ postId }, index) => postId.toString()}
          renderItem={({ item }) => (
            <View style={[s.card]}>
              <View style={[s.cardBody]}>
                <Text
                style={[s.text]}
                onPress={()=>{
                    navigation.navigate('Post',{postId:item.postId})
                }}
                >
                {item.postTitle+"  this is title"}
                </Text>
                <Text
                style={[s.text]}
                onPress={() =>
                    navigation.navigate('User', { id: item.userId })
                }
                >
                { item.userName}
                    </Text>
              </View>
            </View>
          )}
        />
          </View>
       
      )}

     
    </SafeAreaView>
  
  );
};

const mapStateToProps = ( state )=>{
  return {
      arrayData : DashboardDataFilter(state.users,state.posts),
     isLoaded:state.loading
  }
}


export default connect(
      mapStateToProps
)(Home);