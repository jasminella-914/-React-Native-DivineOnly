import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'

export default function LieuModal() {
  return (
    <ActionSheet id='Lieu'>
    <View>
        <Text style={styles.headerText}>Lieu</Text>
    </View>
    </ActionSheet>
  )
}

const styles = StyleSheet.create({})