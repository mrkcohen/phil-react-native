import React from 'react'
// import { Platform, SafeAreaView } from 'react-native'
import { Image, StyleSheet, Text, View, Button } from 'react-native'

class Home extends React.Component {
    static navigationOptions = {
        title: 'Phil',
        headerStyle: {
            backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Image resizeMode="center" source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Actions</Text>
                    <Button title="Check Weather" onPress={() => this.props.navigation.navigate('WeatherCheck')} />

                    <Button title="See Phil sleeping" onPress={() => this.props.navigation.navigate('Sleeping')} />

                    <Button
                        title="See Phil with his shadow"
                        onPress={() => this.props.navigation.navigate('WithShadow')}
                    />

                    <Button
                        title="See Phil without his shadow"
                        onPress={() => this.props.navigation.navigate('NoShadow')}
                    />
                </View>
            </>
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

export default Home
