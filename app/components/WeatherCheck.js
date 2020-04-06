import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class WeatherCheck extends React.Component {
    static navigationOptions = {
        title: 'Checking weather...',
        headerStyle: {
            backgroundColor: '#73C6B6',
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Checking Weather...</Text>
                <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
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
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
})

export default WeatherCheck
