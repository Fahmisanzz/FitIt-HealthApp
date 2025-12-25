import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const WeightScreen = ({ navigation }) => {
  const [selectedWeight, setSelectedWeight] = useState('66');

  const weights = Array.from({ length: 30 }, (_, i) => String(62 + i));

  const handleComplete = () => {
    // Here you would typically save the data and navigate to the main app
    console.log('Onboarding completed with weight:', selectedWeight);
    // navigation.replace('MainApp');
  };

  const WeightPicker = () => (
    <ScrollView
      style={styles.pickerContainer}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {weights.map((weight, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pickerItem}
          onPress={() => setSelectedWeight(weight)}
        >
          <Text
            style={[
              styles.pickerItemText,
              selectedWeight === weight && styles.pickerItemTextSelected,
            ]}
          >
            {weight}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>What's your Weight?</Text>

        {/* Spacer */}
        <View style={{ flex: 0.3 }} />

        {/* Weight Picker with Unit */}
        <View style={styles.weightPickerWrapper}>
          <View style={styles.pickerColumnWrapper}>
            <WeightPicker />
          </View>
          <View style={styles.unitWrapper}>
            <Text style={styles.unitText}>Kg</Text>
          </View>
        </View>

        {/* Selected Weight Display */}
        <View style={styles.selectedWeightContainer}>
          <Text style={styles.selectedWeightValue}>
            {selectedWeight} <Text style={styles.selectedWeightUnit}>Kg</Text>
          </Text>
          <Text style={styles.selectedWeightLabel}>Your current weight</Text>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Complete Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleComplete}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}→</Text>
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2121',
    marginBottom: 40,
    marginTop: 20,
  },
  weightPickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  pickerColumnWrapper: {
    flex: 1,
    height: '100%',
  },
  pickerContainer: {
    flex: 1,
  },
  pickerItem: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'flex-end',
  },
  pickerItemText: {
    fontSize: 14,
    color: '#A7A9A9',
    fontWeight: '400',
  },
  pickerItemTextSelected: {
    fontSize: 32,
    color: '#7C3AED',
    fontWeight: '600',
  },
  unitWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  unitText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C3AED',
  },
  selectedWeightContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#7C3AED',
  },
  selectedWeightValue: {
    fontSize: 24,
    color: '#7C3AED',
    fontWeight: '600',
  },
  selectedWeightUnit: {
    fontSize: 18,
    color: '#626C6C',
    fontWeight: '500',
  },
  selectedWeightLabel: {
    fontSize: 12,
    color: '#A7A9A9',
    marginTop: 4,
    fontWeight: '400',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5E5',
  },
  dotActive: {
    backgroundColor: '#7C3AED',
    width: 24,
  },
});

export default WeightScreen;
