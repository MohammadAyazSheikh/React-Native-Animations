import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, } from 'react-native';
import { shade1, shade2 } from '../utils/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIonic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useFunctionalOrientaion } from '../utils/responsiveUtils';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const screen = Dimensions.get('screen');





const Chat = (props) => {


    const { styles, isPortrait, widthToDp, heightToDp } = useFunctionalOrientaion(responsiveStyles);




    const RenderChat = ({ isSender, message, time }) => {
        const { ProfileColor } = props.route.params
        return (
            isSender ?
                <View style={styles.sMsgViewP}>
                    <View style={[isPortrait ? styles.SprofileViewP : styles.SprofileViewL, { backgroundColor: ProfileColor }]} />
                    <View style={isPortrait ? styles.StxtMsgViewP : styles.StxtMsgViewL}>
                        <Text style={isPortrait ? styles.StxtMsgP : styles.StxtMsgL}>{message}</Text>
                    </View>
                    <Text style={isPortrait ? styles.txtTimeP : styles.txtTimeL} >{time}</Text>
                </View>
                :
                <View style={styles.rMsgViewP}>
                    <Text style={isPortrait ? styles.txtTimeP : styles.txtTimeL} >{time}</Text>
                    <LinearGradient
                        start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                        colors={[shade1, shade2]}
                        style={isPortrait ? styles.RtxtMsgViewP : styles.RtxtMsgViewL}>
                        <Text style={isPortrait ? styles.RtxtMsgP : styles.RtxtMsgL}>{message}</Text>
                    </LinearGradient>
                    <View style={isPortrait ? styles.RprofileViewP : styles.RprofileViewL} />
                </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={isPortrait ? styles.headerViewP : styles.headerViewL}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack();
                    }}>
                    <IconAnt name='left' size={isPortrait ? widthToDp(10) : heightToDp(7)} color='#000' />
                </TouchableOpacity>
                <Text style={isPortrait ? styles.txtHeaderP : styles.txtHeaderL}>Chats</Text>
            </View>
            <View style={isPortrait ? styles.chatViewP : styles.chatViewL}>

                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <RenderChat
                                isSender={item.isSender}
                                message={item.message}
                                time={item.time}
                            />
                        )
                    }}
                />


            </View>
            <View style={isPortrait ? styles.bottomViewP : styles.bottomViewL}>
                <TouchableOpacity style={isPortrait ? styles.btnAddP : styles.btnAddL}>
                    <IconAnt name='plus' size={isPortrait ? widthToDp(10) : heightToDp(10)} color='grey' />
                </TouchableOpacity>
                <View style={isPortrait ? styles.inputViewP : styles.inputViewL}>
                    <TextInput placeholder='write message'
                        placeholderTextColor='grey'
                        style={styles.inputStyleP} />
                </View>
                <TouchableOpacity style={styles.btnSend}>
                    <IconIonic name='send-outline' size={isPortrait ? widthToDp(10) : heightToDp(10)} color='grey'
                        style={{ transform: [{ rotate: '-90deg' }] }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}





export default Chat;


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
            height: '10%',
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
        chatViewP: {
            width: w(100),
            height: '75%',

        },
        chatViewL: {
            width: '100%',
            height: '60%',
        },
        //-----SenderViews
        sMsgViewP: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginVertical: 10,
        },

        SprofileViewP: {
            width: w(15),
            height: w(15),
            borderRadius: w(20) / 2,
            backgroundColor: shade2,
            elevation: 5,
        },
        SprofileViewL: {
            width: h(15),
            height: h(15),
            borderRadius: h(20) / 2,
            backgroundColor: shade2,
            elevation: 5,
        },
        StxtMsgViewP: {
            width: '60%',
            borderRadius: w(10),
            padding: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 10
        },

        StxtMsgViewL: {
            width: '60%',
            borderRadius: h(10),
            padding: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 10
        },

        StxtMsgP: {
            color: '#000',
            fontSize: w(4)
        },
        StxtMsgL: {
            color: '#000',
            fontSize: h(4)
        },


        txtTimeP: {
            color: 'grey',
            fontSize: w(4),
            fontWeight: 'bold',

        },

        txtTimeL: {
            color: 'grey',
            fontSize: h(4),
            fontWeight: 'bold',

        },



        //reciever Views
        rMsgViewP: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginVertical: 10,
        },
        RprofileViewP: {
            width: w(15),
            height: w(15),
            borderRadius: w(20) / 2,
            backgroundColor: shade1,
            elevation: 5
        },
        RprofileViewL: {
            width: h(15),
            height: h(15),
            borderRadius: h(20) / 2,
            backgroundColor: shade1,
            elevation: 5
        },
        RtxtMsgViewP: {
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: w(10),
            padding: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 10,
        },

        RtxtMsgViewL: {
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: h(10),
            padding: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 10,
        },

        RtxtMsgP: {
            color: '#FFF',
            fontSize: w(4)
        },
        RtxtMsgL: {
            color: '#FFF',
            fontSize: h(4)
        },

        bottomViewP: {
            width: w(100),
            height: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
        },
        btnAddP: {
            backgroundColor: '#FFF',
            width: w(15),
            height: w(15),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: w(15) / 2,
            elevation: 10
        },

        btnAddL: {
            backgroundColor: '#FFF',
            width: h(15),
            height: h(15),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: h(15) / 2,
            elevation: 10
        },

        btnSend: {
            padding: 5
        },
        inputViewP: {
            flex: 1,
            height: h(6),
            borderRadius: 100,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 5
        },
        inputViewL: {
            flex: 1,
            height: w(6),
            borderRadius: 100,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            elevation: 10,
            marginHorizontal: 5
        },
        inputStyleP: {
            width: '100%',
            color: '#000',
            fontSize: 14
        },
        bottomViewL: {
            width: '100%',
            height: '30%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
        }
    });
}

const data = [
    {
        message: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        time: '1:00',
        isSender: false,
    },
    {
        message: "It is a long established fact that a reader will be distracted by the readable.",
        time: '1:56',
        isSender: true,
    },
    {
        message: "'Content here, content here', making it look like readable English.",
        time: '2:01',
        isSender: false,
    },
    {
        message: "It is a long established   normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        time: '2:40',
        isSender: false,
    },
    {
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        time: '3:51',
        isSender: true,
    },
    {
        message: "it look like readable English.",
        time: '4:20',
        isSender: false,
    },
    {
        message: "the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        time: '4:40',
        isSender: false,
    }

]

