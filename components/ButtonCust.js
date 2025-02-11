import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BoxText = (props) => {
    const { text1, text2, text3, onPress } = props;
    return (
        <TouchableOpacity style={[styles.container2, { backgroundColor: text3 }]} onPress={onPress}>
            <Text style={[styles.Text_style, { color: text2 }]}>{text1}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container2: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
    },
    Text_style: {
        fontSize: 20,
    }
});

export default BoxText;
