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

const BirthdateScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState('01');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('1990');

  const days = Array.from({ length: 31 }, (_, i) => 
    String(i + 1).padStart(2, '0')
  );
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 50 }, (_, i) => String(1974 + i));

  const handleNext = () => {
    navigation.navigate('Weight');
  };

  const PickerColumn = ({ items, selectedItem, onSelect, style }) => (
    <ScrollView
      style={[styles.pickerColumn, style]}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pickerItem}
          onPress={() => onSelect(item)}
        >
          <Text
            style={[
              styles.pickerItemText,
              selectedItem === item && styles.pickerItemTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>What's your Birthdate?</Text>

        {/* Spacer */}
        <View style={{ flex: 0.3 }} />

        {/* Date Picker */}
        <View style={styles.pickerContainer}>
          <PickerColumn
            items={days}
            selectedItem={selectedDay}
            onSelect={setSelectedDay}
            style={{ flex: 1 }}
          />
          <PickerColumn
            items={months}
            selectedItem={selectedMonth}
            onSelect={setSelectedMonth}
            style={{ flex: 1.5 }}
          />
          <PickerColumn
            items={years}
            selectedItem={selectedYear}
            onSelect={setSelectedYear}
            style={{ flex: 1 }}
          />
        </View>

        {/* Selected Date Display */}
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>
            {selectedDay} {selectedMonth} {selectedYear}
          </Text>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Next Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
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
  pickerContainer: {
    flexDirection: 'row',
    height: 200,
    gap: SIZES.spacing[2],
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radius.lg,
    padding: SIZES.spacing[2],
  },
  pickerColumn: {
    flex: 1,
  },
  pickerItem: {
    paddingVertical: SIZES.spacing[3],
    paddingHorizontal: SIZES.spacing[2],
    alignItems: 'center',
  },
  pickerItemText: {
    fontSize: SIZES.font.sm,
    color: COLORS.textTertiary,
    fontWeight: '400',
  },
  pickerItemTextSelected: {
    fontSize: SIZES.font.lg,
    color: COLORS.gray800,
    fontWeight: '600',
  },
  selectedDateContainer: {
    marginTop: SIZES.spacing[7],
    paddingHorizontal: SIZES.spacing[4],
    paddingVertical: SIZES.spacing[3],
    backgroundColor: '#F0F0F0',
    borderRadius: SIZES.radius.base,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  selectedDateText: {
    fontSize: SIZES.font.base,
    color: COLORS.primary,
    fontWeight: '600',
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

export default BirthdateScreen;
