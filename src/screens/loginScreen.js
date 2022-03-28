import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, } from 'react-native';
import { shade1, shade2 } from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


import { useFunctionalOrientaion } from '../utils/responsiveUtils';

const screen = Dimensions.get('screen');





const Login = (props) => {


    const { styles, isPortrait, widthToDp, heightToDp } = useFunctionalOrientaion(responsiveStyles);




    useEffect(() => {



    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/backImage4x.png')} style={isPortrait ? styles.backImageP : styles.backImageL} />
            <Text style={isPortrait ? styles.txtheadingP : styles.txtheadingL}>Messenger UI</Text>
            <Icon name='message-processing-outline' style={isPortrait ? styles.iconStylesP : styles.iconStylesL} size={isPortrait ? widthToDp(20) : heightToDp(15)} color='#FFF' />
            <View style={styles.bottomViewP}>

                <View style={isPortrait ? styles.colorsGroupViewP : styles.colorsGroupViewL}>
                    <View style={isPortrait ? styles.colorViewP : styles.colorViewL}>
                        <View style={{ width: '60%', height: '60%', borderRadius: 500, backgroundColor: shade2 }} />
                    </View>
                    <View style={isPortrait ? styles.colorViewP : styles.colorViewL}>
                        <View style={{ width: '60%', height: '60%', borderRadius: 500, backgroundColor: 'tomato' }} />
                    </View>
                    <View style={isPortrait ? styles.colorViewP : styles.colorViewL}>
                        <View style={{ width: '60%', height: '60%', borderRadius: 500, backgroundColor: shade1 }} />
                    </View>
                </View>
                <LinearGradient
                    start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                    colors={[shade1, shade2]} style={isPortrait ? styles.btnViewP : styles.btnViewL}>
                    <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            props.navigation.navigate("Message")
                        }}
                    >
                        <Text style={isPortrait ? styles.txtBtnP : styles.txtBtnL}>
                            Sign Up
                    </Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity>
                    <Text style={isPortrait ? styles.txtJoinP : styles.txtJoinL}>Dont have an account? join now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}





export default Login;


function responsiveStyles(screenInfo, w, h) {

    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#FFF',
        },
        backImageP: {
            width: w(100),
            height: h(50),
            resizeMode: 'stretch'
        },
        backImageL: {
            width: w(100),
            height: h(40),
            resizeMode: 'stretch'
        },
        txtheadingP: {
            fontSize: w(10),
            fontWeight: 'bold',
            position: 'absolute',
            top: h(10),
            color: '#FFF'
        },
        txtheadingL: {
            fontSize: h(10),
            fontWeight: 'bold',
            position: 'absolute',
            top: h(2),
            color: '#FFF'
        },
        iconStylesP: {
            position: 'absolute',
            top: h(18)
        },
        iconStylesL: {
            position: 'absolute',
            top: h(15)
        },
        bottomViewP: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',

        },
        colorsGroupViewP: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginBottom: h(10)
        },
        colorsGroupViewL: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginBottom: h(5)
        },
        colorViewP: {
            backgroundColor: '#FFF',
            width: w(15),
            height: w(15),
            marginHorizontal: 10,
            borderRadius: w(18),
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        colorViewL: {
            backgroundColor: '#FFF',
            width: h(15),
            height: h(15),
            marginHorizontal: 10,
            borderRadius: w(18),
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btnViewP: {
            width: w(70),
            height: w(15),
            borderRadius: w(15) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10
        },
        btnViewL: {
            width: h(70),
            height: h(15),
            borderRadius: h(15) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10
        },
        txtBtnP: {
            fontSize: w(5),
            color: '#FFF',
            fontWeight: 'bold'
        },
        txtBtnL: {
            fontSize: h(5),
            color: '#FFF',
            fontWeight: 'bold'
        },
        txtJoinP: {
            fontSize: w(4),
            color: shade1,
            fontWeight: 'bold',
            marginTop: 10
        },
        txtJoinL: {
            fontSize: h(4),
            color: shade1,
            fontWeight: 'bold',
            marginTop: 10
        }
    });
}


