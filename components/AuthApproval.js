import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Linking
} from 'react-native'

export default class AuthApprovalScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { request_id: null, action: null }
    }
