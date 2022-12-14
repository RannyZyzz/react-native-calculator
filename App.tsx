import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text,View, SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import { Row } from './src/components/Row';
import { homeStyles } from './src/components/Home/styles.js'
import calculator,{ initialState } from './src/util';


export default class App extends React.Component{
  state = initialState;

  handleTap = (type: string,value?: any) => {
    this.setState(state => calculator(type, value, state));
  };


  render(){
  return (
    <View style={homeStyles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
          <Text style={homeStyles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={ () => this.handleTap("percentage")}
          />
          <Button
            text="÷"
            theme='accent'
            onPress={ () => this.handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button
            text="7"
            onPress={ () => this.handleTap("number", 7) }
          />
          <Button
            text="8"
            onPress={ () => this.handleTap("number", 8) }
          />
          <Button
            text="9"
            onPress={ () => this.handleTap("number", 9) }
          />
          <Button
            text="X"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button
            text="4"
            onPress={ () => this.handleTap("number","4")}
          />
          <Button
            text="5"
            onPress={ () => this.handleTap("number","5")}
          />
          <Button
            text="6"
            onPress={ () => this.handleTap("number","6")}
          />
          <Button
            text="-"
            theme="accent"
            onPress={ () => this.handleTap("operator","-")}
          />
        </Row>

        <Row>
          <Button
            text="1"
            onPress={ () => this.handleTap("number","1")}
          />
          <Button
            text="2"
            onPress={ () => this.handleTap("number","2")}
          />
          <Button
            text="3"
            onPress={ () => this.handleTap("number","3")}
          />
          <Button
            text="+"
            theme="accent"
            onPress={ () => this.handleTap("operator","+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            theme="double"
            onPress={ () => this.handleTap("number","0")}
          />
          <Button
            text="."
            onPress={ () => this.handleTap("number",".")}
          />
          <Button
            text="="
            theme="accent"
            onPress={ () => this.handleTap("equal")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
  }
}

