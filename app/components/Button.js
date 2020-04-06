/**
 * @flow strict-local
 * @format
 */

'use strict'

import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from './Colors'

class Button extends React.Component<Props> {
    render() {
        const { label, onPress } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.7)',
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        // height: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default Button
