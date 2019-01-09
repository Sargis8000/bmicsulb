import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import BigButton from './components/BigButton';
import BmiInput from './components/BmiInput';

export default class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            instructionsText:
               'To calculate BMI - Enter height and weight',
        };
    }

    resetText = () => {
        this.heightInput.resetText();
        this.weightInput.resetText();

        this.setState({
            instructionsText:
                'Enter height and weight.',
        });
    };

    calculateBMI = () => {
     var height = this.heightInput.getText();
     var weight = this.weightInput.getText();

        // Decide what text should be displayed based on inputs
     
        if (true)
        {
            // Calculations
            bmi = weight/(height*height) * 703;
            bmi = Math.round(bmi,2);

            // Build the text to display
            text =  
            'The clients BMI is' +'\n' + bmi;

            this.setState({
                instructionsText: text,
            });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* ============HEADER============== */}

                <View style={styles.header}>
                    <Text style={styles.headerText}>BMI Calculator</Text>
                </View>

                {/* ================================ */}
                {/* ==============BODY============== */}

                <View style={styles.body}>
                    <Text style={styles.instructionsText}>
                        {this.state.instructionsText}
                    </Text>

                    <BmiInput
                        placeholder="Weight"
                        ref={i => (this.weightInput = i)}
               
                    />
                    <BmiInput
                        placeholder="Height"
                        ref={i => (this.heightInput = i)}
                        
                    />
                    <BigButton text={'Reset'} onPress={this.resetText} />
                    <BigButton
                        text={'Submit'}
                        onPress={this.calculateBMI}
                    />
                </View>

                {/* ================================ */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingTop: 50,
    },
    instructionsText: {
        width: '70%',
        marginBottom: 10,
    },
});
