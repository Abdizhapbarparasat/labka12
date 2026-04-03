import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  // Экран енін бақылау
  const { width } = useWindowDimensions();
  
  // Адаптивті логика: Егер экран 600px-ден кең болса 3 баған, әйтпесе 2 баған
  const columns = width > 600 ? 3 : 2;

  return (
    <View style={styles.mainContainer}>
      {/* 1. Тапсырма: Респонсивті Хедер */}
      <ResponsiveHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 2. Тапсырма: Адаптивті Г पृид */}
        <GridLayout columns={columns} spacing={15}>
          <Card title="React Native" subtitle="Mobile Framework">
            <View style={styles.cardPlaceholder} />
          </Card>
          <Card title="Flexbox" subtitle="Layout Engine">
            <View style={styles.cardPlaceholder} />
          </Card>
          <Card title="TypeScript" subtitle="Static Typing">
            <View style={styles.cardPlaceholder} />
          </Card>
          <Card title="Adaptive" subtitle="Responsive Design">
            <View style={styles.cardPlaceholder} />
          </Card>
          <Card title="Safe Area" subtitle="Notch Support">
            <View style={styles.cardPlaceholder} />
          </Card>
          <Card title="Lab 12" subtitle="Final Task">
            <View style={styles.cardPlaceholder} />
          </Card>
        </GridLayout>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  cardPlaceholder: {
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});