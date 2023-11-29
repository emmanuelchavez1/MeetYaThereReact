import {Text, View } from 'react-native'
import { StyleSheet } from 'react-native';

const stylesTest = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 90
    }
});

export const Main = () => {
    return <View style={stylesTest.container}>
    <Text>Hellow</Text>
    </View>;
};
