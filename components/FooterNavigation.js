import React from 'react';
import {View, Image, StyleSheet, PixelRatio, Dimensions} from 'react-native';
import {w, h} from '../proportion';


const FooterNavigation = () =>{
    return(
        <View style={{flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
        <Image source={require('../imgs/footer/home.png')} style={styles.home} />
        <Image source={require('../imgs/footer/bookmark.png')} style={styles.bookmark} />
        <View style={{backgroundColor:"#5663FF", borderRadius:176.11*w, width:176.11*w, height:176.11*h,
                    justifyContent:'center', alignItems:'center',
                    position:'absolute', bottom:30, left: Dimensions.get('window').width/2 -176.11*w +12 ,
                    shadowColor: '#000',
                    zIndex: 1,
                    shadowOffset: {
                        width: 0,
                        height: 16,
                    },
                    shadowOpacity: 0.25, //achvenebs 16s
                    shadowRadius: 15,
                    elevation: 16,
                    }}>
            <Image style={styles.cross} source={require('../imgs/footer/cross.png')} />
            </View>
        <View style={{width:40}}></View>
        <Image source={require('../imgs/footer/bell.png')} style={styles.bell} />
        <Image source={require('../imgs/footer/person.png')} style={styles.person} />
        </View>
    );
};

const styles = StyleSheet.create({
    home:{
        width: 73.86*w,
        height: 67.71*h,
    
    },
    bookmark: {
        width:44.01*w,
        height:59.95*h

    }, 
    bell: {
        width:58.3*w,
        height:67.44*h
    },
    person:{
        width:41.75*w,
        height:60.57*h
    },
    cross:{
        width: 61.58*w,
        height: 61.58*h
    }


})
export default FooterNavigation;