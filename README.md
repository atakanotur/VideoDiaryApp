# Video Diary App

Video günlüğü uygulaması. Videoları seçip kırpabilir, metadata ekleyebilir ve yerel olarak saklayabilirsiniz.

## 📱 Özellikler

- **Video Seçme**: Cihazınızdan video seçme
- **Video Kırpma**: Videoları istediğiniz aralığa göre kırpma/kesme
- **Metadata Yönetimi**: Videolara isim ve açıklama ekleme
- **Video Listesi**: Tüm videolarınızı görüntüleme
- **Video Oynatma**: Videoları detay sayfasında oynatma
- **Yerel Depolama**: SQLite ile yerel veritabanında saklama
- **Dark Mode**: Otomatik karanlık/aydınlık mod desteği
- **Modern UI**: NativeWind (Tailwind CSS) ile modern arayüz

## 🛠️ Teknolojiler

- **React Native** (0.81.5)
- **Expo** (^54.0.0)
- **Expo Router** - Dosya tabanlı routing
- **TypeScript** - Tip güvenliği
- **SQLite** (expo-sqlite) - Yerel veritabanı
- **React Query** (@tanstack/react-query) - Veri yönetimi
- **Zustand** - State yönetimi
- **React Hook Form** - Form yönetimi
- **NativeWind** - Tailwind CSS for React Native
- **expo-video** - Video oynatma
- **expo-trim-video** - Video kırpma
- **expo-image-picker** - Video seçme
- **expo-video-thumbnails** - Video thumbnail'ları

## 📋 Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn
- iOS için: Xcode (macOS)
- Android için: Android Studio
- Expo CLI (global olarak yüklenmiş)

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd VideoDiaryApp
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. iOS için (sadece macOS):
```bash
cd ios
pod install
cd ..
```

## 🏃 Çalıştırma

### Development Server
```bash
npm start
```

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Web
```bash
npm run web
```

## 📁 Proje Yapısı

```
VideoDiaryApp/
├── app/                    # Expo Router sayfaları
│   ├── _layout.tsx        # Ana layout
│   ├── index.tsx          # Ana sayfa (video listesi)
│   ├── cropVideo.tsx      # Video kırpma sayfası
│   └── videoDetails/      # Video detay sayfası
├── components/            # React bileşenleri
│   ├── atoms/            # Atomik bileşenler
│   ├── molecules/        # Moleküler bileşenler
│   └── organisms/        # Organizma bileşenleri
├── screens/              # Ekran bileşenleri
├── hooks/                # Custom hooks
│   └── queries/         # React Query hooks
├── services/             # Servisler (SQLite, video işlemleri)
├── repositories/         # Veri katmanı
├── store/               # Zustand store'ları
├── types/               # TypeScript tipleri
├── utils/               # Yardımcı fonksiyonlar
└── constants/           # Sabitler
```

## 🎯 Kullanım

1. **Video Ekleme**: Ana ekranda "+" butonuna tıklayın
2. **Video Seçme**: "Pick a video" butonuna tıklayarak cihazınızdan video seçin
3. **Video Kırpma**: Slider'ı kullanarak başlangıç ve bitiş noktalarını ayarlayın
4. **Metadata Ekleme**: "Next" butonuna tıklayıp video için isim ve açıklama girin
5. **Kaydetme**: "Crop" butonuna tıklayarak videoyu kaydedin
6. **Video İzleme**: Ana ekranda bir videoya tıklayarak detay sayfasında izleyin

## 🔧 Geliştirme

### Linting ve Formatting
```bash
# Lint kontrolü
npm run lint

# Otomatik düzeltme
npm run format
```

### Prebuild
Native kodları yeniden oluşturmak için:
```bash
npm run prebuild
```

## 📱 Platform Desteği

- ✅ iOS
- ✅ Android
- ✅ Web (Metro bundler)

## 🔐 İzinler

Uygulama aşağıdaki izinleri gerektirir:
- **Media Library**: Video seçmek için
- **Audio Recording**: Android için (video işleme için)

## 📝 Notlar

- Videolar cihazın yerel depolama alanında saklanır
- SQLite veritabanı uygulama ilk açıldığında otomatik oluşturulur
- Video kırpma işlemi arka planda gerçekleşir
- Dark mode sistem ayarlarına göre otomatik değişir

## 📄 Lisans

Bu proje özel bir projedir.

## 👤 Geliştirici

Atakan Otur

