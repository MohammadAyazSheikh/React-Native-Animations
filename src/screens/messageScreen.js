import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { shade1, shade2 } from '../utils/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { GetProducts } from '../redux/actions/getProductsActions';
import { ADD_CART, REMOVE_CART } from '../redux/actions/cartActions';
import { useFunctionalOrientaion, orientaionListener, useClassOrientaion } from '../utils/responsiveUtils';








const colors = ['#7663dc', '#55d4eb', 'tomato'];

const Message = (props) => {


    const { styles, isPortrait, widthToDp, heightToDp } = useFunctionalOrientaion(responsiveStyles);

    const RenderItems = ({ name, message, time, index }) => {
        return (
            <TouchableOpacity style={isPortrait ? styles.contactViewP : styles.contactViewL}
                onPress={() => {
                    props.navigation.navigate('Chat', {
                        ProfileColor: colors[index % colors.length]
                    });
                }}
            >
                <View style={[isPortrait ? styles.profileViewP : styles.profileViewL, { backgroundColor: colors[index % colors.length] }]} />
                <View style={styles.contactItemViewP}>
                    <Text style={isPortrait ? styles.txtNameP : styles.txtNameL}>{name}</Text>
                    <View style={styles.contactTextViewP}>
                        <Text style={isPortrait ? styles.txtTimeP : styles.txtTimeL}>{time}</Text>
                        <Text style={isPortrait ? styles.txtMessageP : styles.txtMessageL}>{message.length < 30 ? message : message.substring(0, 25)}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }

    return (
        <View style={[styles.container]}>
            <View style={isPortrait ? styles.headerViewP : styles.headerViewL}>
                <TouchableOpacity

                    onPress={() => {
                        props.navigation.goBack();
                    }}>
                    <IconAnt name='left' size={isPortrait ? widthToDp(10) : heightToDp(7)} color='#000' />
                </TouchableOpacity>
                <Text style={isPortrait ? styles.txtHeaderP : styles.txtHeaderL}>Contacts</Text>
            </View>
            <View style={isPortrait ? styles.searchViewP : styles.searchViewL}>
                <View style={styles.searchItemViewP}>
                    <IconAnt name='search1' size={isPortrait ? widthToDp(10) : heightToDp(10)} color='grey' />
                    <TextInput placeholder='search' style={isPortrait ? styles.txtInputP : styles.txtInputL}
                        placeholderTextColor='lightgrey'
                    />
                </View>
            </View>
            <View style={isPortrait ? styles.contactListViewP : styles.contactListViewL}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return <RenderItems
                            name={item.name}
                            time={item.time}
                            message={item.message}
                            index={index}
                        />
                    }}
                />

            </View>
            <View style={isPortrait ? styles.BottomViewP : styles.BottomViewL}>
                <TouchableOpacity style={isPortrait ? styles.btnAddP : styles.btnAddL}>
                    <IconAnt name='plus' size={isPortrait ? widthToDp(10) : heightToDp(10)} color='grey' />
                </TouchableOpacity>
            </View>
        </View>
    );
}





export default Message;


function responsiveStyles(screenInfo, w, h) {


    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#FFF',
        },
        headerViewP: {
            width: w(100),
            height: h(10),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        headerViewL: {
            width: '100%',
            height: h(10),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        txtHeaderP: {
            fontSize: w(10),
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 20
        },
        txtHeaderL: {
            fontSize: h(7),
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 20
        },
        searchViewP: {
            width: w(100),
            height: h(10),
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchViewL: {
            width: '100%',
            height: h(20),
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchItemViewP: {
            width: '80%',
            height: '70%',
            borderRadius: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            elevation: 10
        },
        txtInputP: {
            width: '80%',
            fontSize: w(5),
            color: '#000'
        },
        txtInputL: {
            width: '80%',
            fontSize: h(5),
            color: '#000'
        },
        contactListViewP: {
            width: w(100),
            height: h(55),
            justifyContent: 'center',
            alignItems: 'center'

        },
        contactListViewL: {
            width: '100%',
            height: h(40),
            justifyContent: 'center',
            alignItems: 'center'

        },
        contactViewP: {
            width: w(90),
            height: h(15),
            alignItems: 'center',
            flexDirection: 'row',
        },
        contactViewL: {
            width: '90%',
            height: h(35),
            alignItems: 'center',
            flexDirection: 'row',
        },
        profileViewP: {
            width: w(23),
            height: w(23),
            borderRadius: w(23) / 2,
            backgroundColor: shade2
        },
        profileViewL: {
            width: h(23),
            height: h(23),
            borderRadius: h(23) / 2,
            backgroundColor: shade2
        },
        contactItemViewP: {
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 10
        },
        txtNameP: {
            color: '#000',
            fontSize: w(7.5),
            fontWeight: 'bold',
            marginBottom: 5
        },
        txtNameL: {
            color: '#000',
            fontSize: h(7.5),
            fontWeight: 'bold',
            marginBottom: 5
        },
        contactTextViewP: {
            flexDirection: 'row',
        },
        txtTimeP: {
            fontWeight: 'bold',
            color: '#0f0f0f',
            fontSize: w(4),
            marginRight: 10
        },
        txtTimeL: {
            fontWeight: 'bold',
            color: '#0f0f0f',
            fontSize: h(4),
            marginRight: 10
        },
        txtMessageP: {
            color: 'grey',
            fontSize: w(4)
        },
        txtMessageL: {
            color: 'grey',
            fontSize: h(4)
        },
        BottomViewP: {
            width: w(100),
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        BottomViewL: {
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        btnAddP: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: w(16),
            height: w(16),
            borderRadius: w(16) / 2,
            elevation: 10
        },
        btnAddL: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: h(16),
            height: h(16),
            borderRadius: h(16) / 2,
            elevation: 10
        }

    });
}




const data = [
    {
        id: 1,
        name: 'Ali Khan',
        time: '5:00',
        message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 2,
        name: 'Taha Zubair',
        time: '5:39',
        message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 3,
        name: 'Sami Khan',
        time: '6:00',
        message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 4,
        name: 'Azmat Sheikh',
        time: '7:04',
        message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 5,
        name: 'Umair Zafar',
        time: '8:00',
        message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]