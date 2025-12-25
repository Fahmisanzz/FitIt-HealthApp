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
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

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
          <Text style={styles.buttonText}>→</Text>
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
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.spacing[5],
    paddingVertical: SIZES.spacing[7],
  },
  title: {
    fontSize: SIZES.font['3xl'],
    fontWeight: '600',
    color: COLORS.gray800,
    marginBottom: SIZES.spacing[10],
    marginTop: SIZES.spacing[5],
  },
  weightPickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radius.lg,
    paddingHorizontal: SIZES.spacing[4],
    gap: SIZES.spacing[3],
  },
  pickerColumnWrapper: {
    flex: 1,
    height: '100%',
  },
  pickerContainer: {
    flex: 1,
  },
  pickerItem: {
    paddingVertical: SIZES.spacing[3] + 1,
    paddingHorizontal: SIZES.spacing[2],
    alignItems: 'flex-end',
  },
  pickerItemText: {
    fontSize: SIZES.font.sm,
    color: COLORS.textTertiary,
    fontWeight: '400',
  },
  pickerItemTextSelected: {
    fontSize: 32,
    color: COLORS.primary,
    fontWeight: '600',
  },
  unitWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  unitText: {
    fontSize: SIZES.font.xl,
    fontWeight: '600',
    color: COLORS.primary,
  },
  selectedWeightContainer: {
    marginTop: SIZES.spacing[7],
    paddingHorizontal: SIZES.spacing[4],
    paddingVertical: SIZES.spacing[4],
    backgroundColor: '#F0F0F0',
    borderRadius: SIZES.radius.base,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  selectedWeightValue: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: '600',
  },
  selectedWeightUnit: {
    fontSize: SIZES.font.lg,
    color: COLORS.gray600,
    fontWeight: '500',
  },
  selectedWeightLabel: {
    fontSize: SIZES.font.xs,
    color: COLORS.textTertiary,
    marginTop: SIZES.spacing[1],
    fontWeight: '400',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: SIZES.spacing[5],
  },
  buttonText: {
    fontSize: 28,
    color: COLORS.textInverse,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.spacing[2],
    paddingBottom: SIZES.spacing[5],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gray200,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: 24,
  },
});

export default WeightScreen;
