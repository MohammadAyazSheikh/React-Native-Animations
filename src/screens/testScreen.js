import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { backColor, foreColor, widthToPer, heightToPer } from '../utils/config';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { GetProducts } from '../redux/actions/getProductsActions';
import { ADD_CART, REMOVE_CART } from '../redux/actions/cartActions';
import useOreintation from '../utils/responsiveUtils';
import { color } from 'react-native-reanimated';
const screen = Dimensions.get('screen');





let w = Dimensions.get('screen').width;

let h = Dimensions.get('screen').height;


const Test = (props) => {


    const Oreintation = useOreintation(w,h);
  

    useEffect(() => {



    }, []);

    const pStyle = {
        width: Oreintation.width / 100 * 50,
        height: Oreintation.width / 100 * 70,
        backgroundColor: 'red',
    };
    const lStyle = {}


    return (
        <View style={[styles.container]}>
            <View style={Oreintation.isPortrait ? styles.ptStyle : styles.lpSTyye}>

            </View>
        </View>
    );
}



export default Test;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'purple',
    },

    testStyle: {
        width: screen.width / 100 * 50,
        height: screen.width / 100 * 70,
        backgroundColor: 'red',
    },

    lpSTyye: {
        width: w / 100 * 50,
        height: w / 100 * 70,
        backgroundColor: 'red',
    },
    ptStyle: {
        width: w / 100 * 50,
        height: w / 100 * 70,
        backgroundColor: 'green',
    },






});


