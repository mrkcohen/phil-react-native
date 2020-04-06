import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'

class Sleeping extends React.Component {
    static navigationOptions = {
        title: 'Zzz',
        headerStyle: {
            backgroundColor: '#73C6B6',
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Phil is asleep in his burrow</Text>
                <Image style={styles.img} resizeMode="contain" source={require('../assets/images/sleeping.jpeg')} />
                <Button label="Go Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img: {
        margin: 150,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
})

export default Sleeping
