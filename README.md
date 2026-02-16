# YDS Kelime Kartları - YDS Vocabulary Flashcards

Modern, mobil uyumlu YDS kelime çalışma uygulaması. Firebase destekli, kullanıcı bazlı kelime takibi ve Quizlet tarzı öğrenme sistemi.

## ✨ Özellikler

- 🎴 **Kelime Kartları**: Çevrilebilir flashcard sistemi
- 📊 **İlerleme Takibi**: Öğrenilen, öğrenilen ve toplam kelime istatistikleri
- 🔥 **Günlük Hedef**: Her gün 50 yeni kelime + önceki günlerin tekrarı
- 📱 **Mobil Uyumlu**: Responsive tasarım, her cihazda mükemmel çalışır
- 🌓 **Koyu/Açık Tema**: Göz yormayan tema seçenekleri
- 👤 **Kullanıcı Sistemi**: Firebase Authentication ile güvenli giriş
- 💾 **Veri Saklama**: Firebase Firestore ile bulut tabanlı veri yönetimi
- 📥 **Kelime Yükleme**: JSON formatında kelime listesi import/export
- 🎯 **Akıllı Tekrar**: Öğrenme durumuna göre kelime tekrarı

## 🚀 Hızlı Başlangıç

### 1. Projeyi İndirin

```bash
git clone https://github.com/KULLANICI_ADINIZ/yds-vocabulary-app.git
cd yds-vocabulary-app
```

### 2. Demo Modunda Çalıştırın

Dosyayı doğrudan tarayıcınızda açabilirsiniz:

```bash
# Chrome/Firefox/Safari ile açın
open yds-vocabulary-app.html
```

**Demo Mod**: Firebase yapılandırması yapmadan test edebilirsiniz. Veriler LocalStorage'da saklanır.

### 3. Firebase ile Tam Özellikli Kullanım (Önerilen)

#### Firebase Projesi Oluşturma

1. [Firebase Console](https://console.firebase.google.com/) adresine gidin
2. "Add project" butonuna tıklayın
3. Proje adını girin (örn: "yds-vocabulary")
4. Google Analytics'i istediğiniz gibi ayarlayın (isteğe bağlı)
5. "Create project" butonuna tıklayın

#### Firebase Authentication Kurulumu

1. Firebase Console'da projenize gidin
2. Sol menüden **Build > Authentication** seçin
3. "Get started" butonuna tıklayın
4. **Sign-in method** sekmesine gidin
5. **Email/Password** metodunu aktif edin
6. "Enable" butonuna tıklayıp "Save" deyin

#### Firebase Firestore Kurulumu

1. Sol menüden **Build > Firestore Database** seçin
2. "Create database" butonuna tıklayın
3. **Production mode** seçin (güvenlik kurallarını sonra ayarlayacağız)
4. Lokasyon seçin (Europe-west3 - Frankfurt önerilen)
5. "Enable" butonuna tıklayın

#### Güvenlik Kurallarını Ayarlayın

Firestore Database'de **Rules** sekmesine gidin ve aşağıdaki kuralları ekleyin:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Bu kurallar, kullanıcıların yalnızca kendi verilerine erişmesini sağlar.

#### Firebase Config Bilgilerini Alın

1. Firebase Console'da **Project Overview** yanındaki ⚙️ ikonuna tıklayın
2. **Project settings** seçin
3. Sayfayı aşağı kaydırın, **Your apps** bölümünde **Web** (</>)  ikonuna tıklayın
4. App nickname girin (örn: "YDS Web App")
5. Firebase Hosting'i şimdilik kurmayın (skip)
6. **Register app** butonuna tıklayın
7. Gösterilen `firebaseConfig` objesini kopyalayın

#### Config'i Uygulamaya Ekleyin

`yds-vocabulary-app.html` dosyasını bir metin editörü ile açın ve şu satırları bulun (yaklaşık 580. satır civarı):

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Bu değerleri Firebase Console'dan aldığınız gerçek değerlerle değiştirin:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyC...",
    authDomain: "yds-vocabulary.firebaseapp.com",
    projectId: "yds-vocabulary",
    storageBucket: "yds-vocabulary.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123..."
};
```

Dosyayı kaydedin ve tarayıcınızda açın. Artık tam özellikli Firebase entegrasyonu ile çalışıyorsunuz!

## 📖 Kullanım

### İlk Giriş

1. Uygulamayı açın
2. "Hesap Oluştur" seçeneğine tıklayın
3. Ad, e-posta ve şifre bilgilerinizi girin
4. "Kayıt Ol" butonuna tıklayın

### Kelime Çalışma

1. **Çalış** sekmesine tıklayın
2. Kelime kartını çevirmek için üzerine tıklayın
3. Kelimenin anlamını, örnek cümlesini ve eş/zıt anlamlılarını görün
4. **Biliyorum** veya **Tekrar Edeceğim** butonlarına tıklayın
5. Bir sonraki kelimeye geçin

### Kelime Listesi

- **Kelime Listesi** sekmesinden tüm kelimeleri görebilirsiniz
- Kelimelerin durumunu (Yeni/Öğreniliyor/Öğrenildi) takip edin

### Kelime İmport/Export

#### JSON Formatı

Kelimeler şu formatta olmalıdır:

```json
[
  {
    "word": "abandon",
    "turkish": "terk etmek, bırakmak",
    "example": "He had to abandon his car in the snow.",
    "synonyms": ["desert", "leave", "forsake"],
    "antonyms": ["keep", "maintain"],
    "level": 1
  }
]
```

#### Kelime Yükleme

1. **Kelime Yükle** sekmesine gidin
2. "Dosya Seç" butonuna tıklayın
3. JSON formatında kelime dosyanızı seçin
4. Kelimeler otomatik olarak sisteme eklenecektir

#### Kelime İndirme

1. **Kelime Yükle** sekmesine gidin
2. "YDS 1500 Kelime İndir" butonuna tıklayın
3. `yds-words.json` dosyası bilgisayarınıza inecektir

## 🎨 Özelleştirme

### Tema Değişiklikleri

CSS değişkenlerini düzenleyerek renkleri özelleştirebilirsiniz:

```css
:root {
    --bg-primary: #fafafa;
    --bg-secondary: #ffffff;
    --accent: #2563eb;
    /* Diğer değişkenler... */
}
```

### Günlük Hedef Değiştirme

`StudySection` bileşeninde günlük kelime sayısını değiştirebilirsiniz:

```javascript
const wordsToStudy = YDS_WORDS.filter(word => {
    const userWord = userWords[word.word];
    return !userWord || userWord.status !== 'learned';
}).slice(0, 50); // Bu sayıyı istediğiniz değere değiştirin
```

### Kelime Eklemek

`YDS_WORDS` dizisine yeni kelimeler ekleyebilirsiniz:

```javascript
const YDS_WORDS = [
    // Mevcut kelimeler...
    { 
        word: "yeni_kelime", 
        turkish: "anlam", 
        example: "Örnek cümle.", 
        synonyms: ["eş1", "eş2"], 
        antonyms: ["zıt1"], 
        level: 1 
    }
];
```

## 🌐 GitHub Pages ile Yayınlama

### Adım 1: GitHub Repository Oluşturma

```bash
git init
git add .
git commit -m "Initial commit: YDS Vocabulary App"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/yds-vocabulary-app.git
git push -u origin main
```

### Adım 2: GitHub Pages Aktif Etme

1. GitHub repository'nizde **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin
3. **Source** bölümünde **main** branch'i seçin
4. **Save** butonuna tıklayın
5. Birkaç dakika içinde siteniz `https://KULLANICI_ADINIZ.github.io/yds-vocabulary-app/` adresinde yayınlanacak

### Adım 3: Firebase ile Domain Ayarlama

1. Firebase Console'da **Hosting** bölümüne gidin
2. GitHub Pages domain'inizi Firebase'e tanımlayın (isteğe bağlı)

## 📱 Mobil Uygulama

Bu proje responsive tasarıma sahiptir ve mobile cihazlarda web app olarak kullanılabilir.

### iOS'ta Ana Ekrana Ekleme

1. Safari ile siteyi açın
2. Paylaş butonuna tıklayın
3. "Ana Ekrana Ekle" seçeneğini seçin

### Android'de Ana Ekrana Ekleme

1. Chrome ile siteyi açın
2. Menü (⋮) butonuna tıklayın
3. "Ana ekrana ekle" seçeneğini seçin

## 🔒 Güvenlik

- Kullanıcı şifreleri Firebase Authentication ile güvenli şekilde saklanır
- Firestore güvenlik kuralları, kullanıcıların yalnızca kendi verilerine erişmesini sağlar
- Hiçbir hassas veri client-side'da saklanmaz

## 🛠️ Teknolojiler

- **React 18**: UI bileşenleri
- **Firebase 10**: Authentication & Firestore
- **Vanilla CSS**: Özel tasarım sistemi
- **LocalStorage**: Demo mod için veri saklama

## 📊 Veri Yapısı

### Firestore Collection: `users`

```javascript
{
  userId: {
    name: "Kullanıcı Adı",
    email: "kullanici@email.com",
    createdAt: Timestamp,
    words: {
      "abandon": {
        word: "abandon",
        turkish: "terk etmek",
        status: "learned", // "new" | "learning" | "learned"
        lastReviewed: "2024-01-15T10:30:00Z",
        addedAt: "2024-01-10T08:00:00Z"
      }
    },
    dailyGoal: 50,
    streak: 5
  }
}
```

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 💡 Geliştirme Fikirleri

- [ ] Kelime testi/quiz modu
- [ ] Sesli telaffuz özelliği
- [ ] Haftalık/aylık ilerleme grafikleri
- [ ] Arkadaşlarla rekabet modu
- [ ] Özel kelime setleri oluşturma
- [ ] Spaced repetition algoritması
- [ ] Push notification hatırlatıcılar
- [ ] PDF/Excel export
- [ ] Çoklu dil desteği

## 📧 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

## 🙏 Teşekkürler

YDS kelime çalışmanızda başarılar dileriz! 🎓✨

---

**Not**: Bu proje eğitim amaçlıdır ve YDS sınavına hazırlanan öğrencilere yardımcı olmak için geliştirilmiştir.
