# FitIt - Health Tracking Application

**Fit Your Health** - A modern React Native health tracking application with a smooth onboarding flow.

## 📱 Features

### Onboarding Flow
1. **Welcome Screen** - Introduction to the FitIt app
2. **Gender Selection** - Choose Male or Female
3. **Birthdate Picker** - Select day, month, and year with scrollable pickers
4. **Weight Input** - Pick weight in kilograms with scrollable picker

## 📁 Project Structure

```
FitIt-HealthApp/
├── src/
│   ├── navigation/
│   │   └── OnboardingStack.js          # Navigation stack for onboarding
│   └── screens/
│       └── onboarding/
│           ├── WelcomeScreen.js        # Welcome/intro screen
│           ├── GenderScreen.js         # Gender selection screen
│           ├── BirthdateScreen.js      # Birthdate picker screen
│           └── WeightScreen.js         # Weight picker screen
├── App.js                              # Root component
├── app.json                            # Expo configuration
├── package.json                        # Dependencies
└── README.md                           # This file
```

## 🛠 Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and runtime
- **React Navigation** - Navigation library
- **TypeScript** - Type safety (optional)

## 📦 Installation

### Prerequisites
- Node.js 14+ 
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Fahmisanzz/FitIt-HealthApp.git
cd FitIt-HealthApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
expo start
```

4. Run on device or emulator:
```bash
# For iOS (macOS only)
npm run ios

# For Android
npm run android

# For Web
npm run web
```

## 🎨 Design Details

### Color Scheme
- **Primary:** `#7C3AED` (Purple)
- **Text:** `#1F2121` (Dark Gray)
- **Secondary Text:** `#626C6C` (Medium Gray)
- **Background:** `#F5F5F5` (Light Gray)
- **Accent:** `#FF6B35` (Orange)

### Typography
- Font Family: System fonts (-apple-system, Segoe UI)
- Primary Weight: 600 (Semibold)
- Secondary Weight: 400-500 (Normal to Medium)

## 📱 Screen Components

### WelcomeScreen
- FitIt branding with logo
- "Get Started" button
- Pagination indicator (Step 1/4)

### GenderScreen
- Male/Female selection with icons
- Visual feedback on selection
- Next navigation button (arrow)
- Pagination indicator (Step 2/4)

### BirthdateScreen
- Scrollable day picker (1-31)
- Scrollable month picker (Jan-Dec)
- Scrollable year picker (1974-2023)
- Selected date display
- Pagination indicator (Step 3/4)

### WeightScreen
- Scrollable weight picker (62-91 kg)
- Unit display (Kg)
- Weight summary display
- Pagination indicator (Step 4/4)

## 🔧 Customization

### Add New Onboarding Steps

1. Create a new screen in `src/screens/onboarding/`:
```javascript
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const NewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Your content */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
});

export default NewScreen;
```

2. Add to `OnboardingStack.js`:
```javascript
<Stack.Screen name="NewStep" component={NewScreen} />
```

3. Update pagination dots to reflect new step count

### Modify Colors
Update color values in the `StyleSheet.create()` sections:
```javascript
backgroundColor: '#7C3AED', // Change primary color
color: '#1F2121',           // Change text color
```

## 📋 Dependencies

- `react-native` - Core framework
- `expo` - Development platform
- `@react-navigation/native` - Navigation base
- `@react-navigation/native-stack` - Stack navigator
- `react-native-screens` - Performance optimization
- `react-native-safe-area-context` - Safe area handling

## 🚀 Future Enhancements

- [ ] Data persistence (AsyncStorage)
- [ ] Authentication flow
- [ ] Main app dashboard
- [ ] Health metrics tracking
- [ ] Data synchronization with backend
- [ ] Dark mode support
- [ ] Localization (Indonesian, English)
- [ ] Animations and transitions

## 📝 Notes

- All screens use scrollable pickers for better UX
- Navigation is stack-based for linear onboarding flow
- Pagination dots indicate progress through onboarding
- Button states are managed with local component state
- Safe area insets handled automatically by SafeAreaView

## 📄 License

MIT License - feel free to use this project for personal and commercial purposes.

## 👨‍💻 Author

Fahmi Bachtyar - [GitHub](https://github.com/Fahmisanzz)

## 💬 Support

For issues, questions, or suggestions, please open an issue on the repository or contact the author.

---

**Happy coding!** 🚀
