import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { backColor, foreColor, widthToPer, heightToPer } from '../utils/config';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { GetProducts } from '../redux/actions/getProductsActions';
import { ADD_CART, REMOVE_CART } from '../redux/actions/cartActions';
import { useFunctionalOrientaion, orientaionListener, useClassOrientaion } from '../utils/responsiveUtils';
import { color } from 'react-native-reanimated';
const screen = Dimensions.get('screen');





let w = Dimensions.get('screen').width;

let h = Dimensions.get('screen').height;


const Test = (props) => {


    const Oreintation = useFunctionalOrientaion(responsiveStyles);




    return (
        <View style={[styles.container]}>
            <View style={Oreintation.isPortrait ? Oreintation.styles.ptStyle : Oreintation.styles.lpSTyye}>

            </View>
        </View>
    );
}

// class Test extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             screenInfo: Dimensions.get('screen')
//         }


//         this.Oreintation = orientaionListener(this);
//     }

//     componentDidMount() {
//         this.Oreintation.addOrientationListener();
//     }
//     componentWillUnmount() {
//         this.Oreintation.removeOrientationListener();
//     }
//     render() {

//         const styles2 = useClassOrientaion(this, responsiveStyles);

//         return (
//             <View style={[styles.container]}>
//                 <View style={styles2.isPortrait ? styles2.styles.ptStyle : styles2.styles.lpSTyye}>

//                 </View>
//             </View>
//         );
//     }

// }



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

});

function responsiveStyles(screenInfo, w, h) {

    console.log(JSON.stringify(screenInfo))
    return StyleSheet.create({
        lpSTyye: {
            width: w(50),
            height: h(70),
            backgroundColor: 'red',
        },
        ptStyle: {
            width: w(50),
            height: h(70),
            backgroundColor: 'green',
        },
    });
}


