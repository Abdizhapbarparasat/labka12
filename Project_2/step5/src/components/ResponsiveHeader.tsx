import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, Platform } from 'react-native';

export function ResponsiveHeader() {
  // Экран енін алу
  const { width } = useWindowDimensions();
  
  // Егер экран ені 600-ден үлкен болса (планшет), көк түс, кіші болса (телефон) — күлгін түс
  const isTablet = width > 600;
  const headerBackgroundColor = isTablet ? '#2c3e50' : '#8e44ad';

  return (
    <SafeAreaView style={{ backgroundColor: headerBackgroundColor }}>
      <View style={[styles.headerContainer, { backgroundColor: headerBackgroundColor }]}>
        <Text style={styles.headerTitle}>Lab 12: Adaptive Design</Text>
        <Text style={styles.headerSubtitle}>
          {isTablet ? 'Tablet Mode' : 'Mobile Mode'} | Width: {Math.round(width)}px
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // Android-тағы жоғарғы бос орынды реттеу
    ...Platform.select({
      android: {
        paddingTop: 40,
      },
    }),
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#ecf0f1',
    fontSize: 14,
    marginTop: 5,
  },
});