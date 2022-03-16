import React, { useState, useEffect, Component } from 'react';
import { Dimensions } from 'react-native';

export default useOreintaion = (w, h) => {

    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));
    w = screenInfo.width;
    h = screenInfo.height;

    useEffect(() => {

        const onScreenChange = (change) => {
            setScreenInfo(change.screen);
        }

        const listener = Dimensions.addEventListener('change', onScreenChange);

        return () => listener.remove();

    }, [])


    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width,
    };

}