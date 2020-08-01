import React, { useEffect, useState } from 'react';
import {  Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { connect } from 'react-redux';
import getUser from '../redux/filters/UserFilter'


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

const User = ({userData}) => {
   useEffect(() => {
   //   console.log(userData)
   }, [])
  
  return (    
     <View style={[s.card]}>
        <View style={[s.cardBody]}>
          <Text
          style={[s.text]}
          >
         User Name:  {userData.username}
          </Text>
          <Text
          style={[s.text]}
          >
          Name:   {userData.name}
          </Text>
          <Text
          style={[s.text]}
          >
         WebSite: {userData.website}
          </Text>
          <Text
          style={[s.text]}
          >
          Company Name: {userData.company.name}
          </Text>
          <Text
          style={[s.text]}
          >
          Email Address: {userData.email}
          </Text>
        </View>
      </View>
  );
};
const mapStateToProps =(state,ownProps)=>{
   return {
      userData:getUser(state.users,ownProps.route.params.id)
   }
}
export default connect(mapStateToProps)(User)