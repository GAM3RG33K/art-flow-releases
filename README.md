# ArtFlow 🎨

> **Discover, Browse, and Save Stunning AI-Generated Wallpapers**

ArtFlow is a beautifully designed Flutter mobile app that lets you explore thousands of AI-generated artworks from Civitai and instantly set them as your device wallpapers. Swipe through curated collections, filter by style and content, and transform your device with incredible AI art.

<div align="center">

[![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)](https://flutter.dev/)
[![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=for-the-badge)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey.svg?style=for-the-badge)]()

</div>

## ✨ Features

### 🖼️ **Infinite Art Discovery**
- Browse thousands of AI-generated images from Civitai
- Smooth card-based swiping interface
- Infinite scroll with intelligent preloading
- High-quality image rendering and caching

### 🎛️ **Advanced Filtering**
- **Content Rating**: PG, Soft, Mature filtering options
- **Sort Options**: Most Reactions, Most Comments, Newest
- **Time Periods**: All Time, Year, Month, Week, Day
- **AI Models**: Filter by specific AI models (Flux, SDXL, etc.)

### 📱 **Wallpaper Management**
- One-tap wallpaper setting for home/lock screen
- Smart image optimization for different screen sizes
- Local caching for offline viewing
- Android 12+ compatibility with system integration

### 🛡️ **Privacy & Safety**
- **Zero data collection** - everything stays on your device
- Content filtering options for safe browsing
- Proper attribution to original creators
- Full compliance with copyright laws

### 🎨 **User Experience**
- **Dark/Light Theme** support
- Responsive design for tablets and phones
- Smooth animations and transitions
- Intuitive gesture controls

## 📱 Screenshots

<div align="center">

| Home Feed | Filter Options | Wallpaper Preview |
|-----------|----------------|-------------------|
| ![Home](screenshots/home.png) | ![Filters](screenshots/filters.png) | ![Preview](screenshots/preview.png) |

</div>

## 🏗️ Tech Stack

### **Frontend**
- **Flutter** - Cross-platform mobile framework
- **Dart** - Programming language
- **Material Design 3** - UI components and theming

### **Core Libraries**
- `dio` - HTTP client for API requests
- `cached_network_image` - Image caching and optimization
- `flutter_card_swiper` - Smooth card swiping interface
- `shared_preferences` - Local data persistence
- `package_info_plus` - App metadata access

### **Architecture**
- **Repository Pattern** - Data layer abstraction
- **Service Locator** (GetIt) - Dependency injection
- **ValueNotifier** - State management
- **Modular Structure** - Clean code organization

### **Platform Integration**
- **Method Channels** - Native Android/iOS integration
- **File Provider** - Secure file sharing
- **Wallpaper Manager** - System wallpaper APIs

## 🔧 Configuration

### API Configuration

The app uses Civitai's public API. No API key required for basic functionality.

```dart
// lib/src/constants.dart
const kBaseApi = 'https://civitai.com';
const kBaseImageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA';
```

### Customization

You can customize various aspects of the app:

```dart
// Modify filter options
const List<FilterEntry<String>> nsfwOptions = [
  FilterEntry<String>(value: '1', label: 'PG'),
  FilterEntry<String>(value: '2', label: 'Soft'),
  FilterEntry<String>(value: '3', label: 'Mature'),
];

// Adjust caching behavior
const String kCacheManagerKey = 'artflow_image_cache';
const int kMaxCardVisible = 10;
```

## 📁 Project Structure

```
lib/
├── src/
│   ├── application/          # App-level services
│   │   ├── logger/          # Logging utilities
│   │   └── services/        # Core services (network, storage)
│   ├── core/                # Core utilities and constants
│   ├── data/                # Data layer (repositories)
│   ├── presentation/        # UI layer
│   │   ├── components/      # Reusable widgets
│   │   └── screens/         # App screens
│   └── utils/               # Helper utilities
├── assets/                  # Static assets
└── test/                   # Unit and widget tests
```

## 🛡️ Privacy & Legal

### Data Privacy
- **No personal data collection** outside your device
- **No tracking or analytics** (currently)
- **Local storage only** for preferences and cache
- **Transparent privacy policy** available

### Copyright Compliance
- All images sourced from Civitai with proper attribution
- Respects individual creator licenses
- DMCA-compliant reporting system
- Fair use for wallpaper purposes

### Content Safety
- Built-in content filtering options
- Age-appropriate content controls
- Community moderation through Civitai
- Parental guidance features

## 📊 Roadmap

### 🎯 **Upcoming Features**
- [ ] **Collections & Favorites** - Save and organize favorite artworks
- [ ] **Search Functionality** - Search by tags, artists, and descriptions
- [ ] **Offline Mode** - Extended offline browsing capabilities
- [ ] **Social Features** - Share wallpapers with friends
- [ ] **Custom Categories** - Create personal image collections

### 🔮 **Future Enhancements**
- [ ] **Live Wallpapers** - Animated wallpaper support
- [ ] **Widget Support** - Home screen widgets
- [ ] **Cloud Sync** - Optional cloud synchronization
- [ ] **AI Upscaling** - Enhance image quality
- [ ] **Creator Profiles** - Follow favorite AI artists

## 📈 Performance

- **Fast Loading**: Optimized image caching and preloading
- **Memory Efficient**: Smart memory management for large images
- **Smooth Scrolling**: 60fps animations and transitions
- **Battery Optimized**: Efficient network usage and background processing

## 🐛 Known Issues

- Android 12+ may briefly restart app when setting wallpapers (system limitation)
- Some very large images may take longer to load on slower connections
- iOS wallpaper setting requires manual action due to platform restrictions

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- Images from Civitai are subject to their respective creator licenses
- Flutter and Dart are licensed under BSD 3-Clause License

## 📞 Support

### Get Help
- 📧 **Email**: contact@harshjoshi.dev
- 🌐 **Website**: https://harshjoshi.dev
- 📱 **Issues**: [GitHub Issues](https://github.com/GAM3RG33K/art-flow-releases/issues)

### FAQ

**Q: Is the app free?**
A: Yes, ArtFlow is completely free with no ads (currently).

**Q: Do I need to create an account?**
A: No, the app works without any registration or login.

**Q: Can I use these images commercially?**
A: Check individual image licenses on Civitai. Most are for personal use only.

**Q: Why do some wallpapers look different on my device?**
A: Images are optimized for your screen size and may be cropped or scaled.

## 🙏 Acknowledgments

- **Civitai** - For providing the amazing AI art platform and API
- **Flutter Team** - For the incredible cross-platform framework  
- **AI Artists** - For creating the beautiful artworks featured in the app
- **Open Source Community** - For the libraries and tools that make this possible

---

<div align="center">

**Made with ❤️ by [Harshvardhan Joshi](https://harshjoshi.dev)**

[⭐ Star this repo](https://github.com/GAM3RG33K/art-flow-releases) • [📱 Download](https://github.com/GAM3RG33K/art-flow-releases/releases)

</div>