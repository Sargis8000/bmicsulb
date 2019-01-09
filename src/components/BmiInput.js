import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class BmiInput extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    getText = () => {
       
        return this.state.text;
    };

    resetText = () => {
        this.setState({ text: '' });
    };

    render() {
        return (
            <TextInput
                {...this.props}
                autoCorrect={false}
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor="black"
                blurOnSubmit={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        width: '75%',
        borderRadius: 12,
        textAlign: 'center',
        marginVertical: 5,
    },
});
