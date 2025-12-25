# 🚀 FitIt Setup Guide untuk Expo

Panduan lengkap untuk setup dan menjalankan FitIt Health App menggunakan Expo.

## 📋 Prerequisite

- Node.js v16 atau lebih tinggi
- npm atau yarn
- Expo CLI (`npm install -g expo-cli`)
- Perangkat fisik atau emulator (iOS/Android)

## 📦 Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/Fahmisanzz/FitIt-HealthApp.git
cd FitIt-HealthApp
```

### 2. Install Dependencies

```bash
npm install
# atau menggunakan yarn
yarn install
```

### 3. Buat Environment File

```bash
cp .env.example .env
```

### 4. Mulai Development Server

```bash
npm start
# atau
expo start
```

## 🏃 Menjalankan Aplikasi

### Menggunakan Expo Go (Recommended untuk Development)

#### iOS
```bash
npm run ios
```
Atau tekan `i` di terminal setelah `npm start`

#### Android
```bash
npm run android
```
Atau tekan `a` di terminal setelah `npm start`

#### Web Browser
```bash
npm run web
```
Atau tekan `w` di terminal setelah `npm start`

### Menggunakan Physical Device

1. Install Expo Go dari App Store atau Google Play
2. Jalankan `npm start` di terminal
3. Scan QR code dengan Expo Go app

## 📱 Struktur Project Expo

```
FitIt-HealthApp/
├── App.js                      # Entry point dengan StatusBar
├── app.json                    # Konfigurasi Expo
├── babel.config.js             # Babel configuration
├── package.json                # Dependencies
├── .env.example                # Environment template
├── .gitignore                  # Git ignore patterns
│
└── src/
    ├── navigation/
    │   └── OnboardingStack.js   # Navigation setup
    │
    ├── screens/
    │   └── onboarding/
    │       ├── WelcomeScreen.js
    │       ├── GenderScreen.js
    │       ├── BirthdateScreen.js
    │       └── WeightScreen.js
    │
    ├── constants/
    │   ├── colors.js            # Theme colors
    │   └── sizes.js             # Spacing & typography
    │
    └── utils/
        └── helpers.js           # Utility functions
```

## 🎨 Design Tokens

Proyek menggunakan centralized design tokens untuk consistency.

### Colors (`src/constants/colors.js`)
```javascript
import { COLORS } from './constants/colors';

// Primary
COLORS.primary        // #7C3AED (Purple)
COLORS.primaryHover   // #6D28D9
COLORS.primaryActive  // #5B21B6

// Text
COLORS.text           // #1F2121
COLORS.textSecondary  // #626C6C
COLORS.textTertiary   // #A7A9A9

// Background
COLORS.background     // #ffffff
COLORS.surface        // #F5F5F5
```

### Sizes (`src/constants/sizes.js`)
```javascript
import { SIZES } from './constants/sizes';

// Font sizes
SIZES.font.xs   // 11px
SIZES.font.sm   // 12px
SIZES.font.base // 14px
SIZES.font.lg   // 16px
SIZES.font.xl   // 18px

// Spacing (8px base)
SIZES.spacing[1] // 4px
SIZES.spacing[2] // 8px
SIZES.spacing[3] // 12px
SIZES.spacing[4] // 16px
SIZES.spacing[5] // 20px

// Border radius
SIZES.radius.sm     // 6px
SIZES.radius.base   // 8px
SIZES.radius.lg     // 12px
```

## 🔧 Development Workflow

### Fast Refresh
Expo mendukung Fast Refresh - ubah kode dan perubahan akan langsung tampil tanpa reload penuh.

### Debugging

1. **React DevTools**
   - Buka Expo menu (cmd+d di iOS, cmd+m di Android)
   - Pilih "Debug remote JS"

2. **Console Logs**
   ```javascript
   console.log('Debug message');
   ```

### Hot Reload vs Fast Refresh

- **Fast Refresh**: Reload hanya bagian yang berubah (default)
- **Full Reload**: cmd+d/m > "Reload" untuk reload penuh

## 📚 Menggunakan Constants

### Menambah Color

Edit `src/constants/colors.js`:
```javascript
export const COLORS = {
  // ... existing colors
  newColor: '#ABCDEF',
};
```

### Menambah Font Size

Edit `src/constants/sizes.js`:
```javascript
export const SIZES = {
  font: {
    // ... existing sizes
    newSize: 32,
  },
};
```

### Menggunakan di Component

```javascript
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/sizes';

const styles = StyleSheet.create({
  text: {
    color: COLORS.text,
    fontSize: SIZES.font.lg,
  },
});
```

## 🔐 Environment Variables

Edit `.env` file untuk production settings:

```env
EXPO_USE_FAST_REFRESH=true
API_BASE_URL=https://api.yourapp.com
API_VERSION=v1
DEBUG_MODE=false
```

## 📦 Building untuk Production

### Web Build
```bash
expo export --platform web
```

### iOS Build (EAS Build)
```bash
eas build --platform ios
```

### Android Build (EAS Build)
```bash
eas build --platform android
```

*Memerlukan Expo EAS account dan setup*

## ❌ Troubleshooting

### Issue: Expo Start Tidak Berjalan

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Restart expo
npm start --clear
```

### Issue: Module Not Found

```bash
# Install missing dependencies
npm install

# Reset metro bundler
watchman watch-del-all
rm -rf node_modules/.cache
```

### Issue: Port Already In Use

```bash
# Gunakan custom port
expo start -p 19001
```

### Issue: StatusBar Error

Pastikan `expo-status-bar` terinstall:
```bash
npm install expo-status-bar
```

## 📖 Useful Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [Expo EAS](https://eas.expo.dev)

## 💡 Tips & Best Practices

1. **Gunakan Constants**: Selalu gunakan COLORS dan SIZES dari constants untuk consistency
2. **Functional Components**: Gunakan functional components dengan hooks
3. **Hot Reload**: Manfaatkan fast refresh untuk development yang cepat
4. **Performance**: Gunakan `React.memo` untuk complex components
5. **Testing**: Install dan gunakan Testing Library untuk testing

## 🎯 Next Steps

1. ✅ Setup berhasil
2. ⏭️ Buat Home Screen setelah onboarding
3. ⏭️ Implementasi data persistence dengan AsyncStorage
4. ⏭️ Setup backend API integration
5. ⏭️ Tambahkan authentication flow
6. ⏭️ Build untuk production

---

**Butuh bantuan?** Lihat [GitHub Issues](https://github.com/Fahmisanzz/FitIt-HealthApp/issues) atau buat issue baru.
