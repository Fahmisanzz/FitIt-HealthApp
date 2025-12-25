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
  pickerContainer: {
    flexDirection: 'row',
    height: 200,
    gap: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 10,
  },
  pickerColumn: {
    flex: 1,
  },
  pickerItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  pickerItemText: {
    fontSize: 14,
    color: '#A7A9A9',
    fontWeight: '400',
  },
  pickerItemTextSelected: {
    fontSize: 16,
    color: '#1F2121',
    fontWeight: '600',
  },
  selectedDateContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#7C3AED',
  },
  selectedDateText: {
    fontSize: 14,
    color: '#7C3AED',
    fontWeight: '600',
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

export default BirthdateScreen;
