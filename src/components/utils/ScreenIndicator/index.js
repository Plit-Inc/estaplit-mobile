import { useEffect, useRef, useState } from "react";
import {Animated, Easing} from "react-native";
import {ColoredWidget, ScreenIndicatorStyle, UncoloredWidget} from "./style";

export default function ScreenIndicator({ numberOfFilledWidgets }) {
    const percentageFilledWidgets = [
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current,
    ];

    const fillOneWidget = async (numberOfFilledWidgets, duration) => {
        const delay = async (ms) => new Promise(res => setTimeout(res, ms));
        await delay(100);
        fillAnimation(numberOfFilledWidgets, duration);
        await delay(1100);
    }

    const unfillOneWidget = async (unfillNumber, duration) => {
        const delay = async (ms) => new Promise(res => setTimeout(res, ms));
        await delay(100);
        unfillAnimation(unfillNumber, duration);
        await delay(1100);
    };

    const fillAnimation = (widgetNumber, duration) => {
        Animated.timing(percentageFilledWidgets[widgetNumber], {
            toValue: 100,
            duration: duration,
            useNativeDriver: false,
            Easing
        }).start();
    };

    const unfillAnimation = (widgetNumber, duration) => {
        Animated.timing(percentageFilledWidgets[widgetNumber], {
            toValue: 0,
            duration: duration,
            useNativeDriver: false,
            Easing
        }).start();
    };

    useEffect(() => {
        for (let i = 0; i < numberOfFilledWidgets; i++) {
            if (i == numberOfFilledWidgets - 1){
                fillOneWidget(i, 1000);
            } else {
                fillOneWidget(i, 0);
            }
        };
    }, [numberOfFilledWidgets]);

    return (
        <ScreenIndicatorStyle>
            <UncoloredWidget>
                <ColoredWidget
                    style={{width: percentageFilledWidgets[0].interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"],
                            extrapolate: "clamp"
                        })}} />
            </UncoloredWidget>
            <UncoloredWidget>
                <ColoredWidget
                    style={{width: percentageFilledWidgets[1].interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"],
                            extrapolate: "clamp"
                        })}}/>
            </UncoloredWidget>
            <UncoloredWidget>
                <ColoredWidget
                    style={{width: percentageFilledWidgets[2].interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"],
                            extrapolate: "clamp"
                        })}}/>
            </UncoloredWidget>
        </ScreenIndicatorStyle>
    )
};