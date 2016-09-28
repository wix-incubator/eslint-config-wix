import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Welcome extends Component {
  static name = 'my name';

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // nothing
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{'Hello World!'}</Text>
        <Text>{this.props.noPropValidation}</Text>
        <Text onChange={this.componentChanged}>{'any handler name is fine'}</Text>
        <View onClick={() => this.onClick()}/>
      </View>
    );
  }
}
