import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'

class WithShadow extends React.Component {
    static navigationOptions = {
        title: 'Phil saw his shadow!',
        headerStyle: {
            backgroundColor: '#73C6B6',
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Phil has seen his shadow!</Text>
                <Image
                    style={styles.img}
                    resizeMode="center"
                    source={require('../assets/images/groundhog_shadow.png')}
                />
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
    img: {},
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
})

export default WithShadow
