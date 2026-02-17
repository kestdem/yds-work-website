# YDS Vocab 🃏

> YDS sınavı için Quizlet mantığında İngilizce kelime öğrenme uygulaması.  
> Firebase ile kişisel giriş, kullanıcı bazlı ilerleme takibi, karanlık/aydınlık tema.

---

## 🚀 Özellikler

- 🔐 **Kişisel Giriş** — Firebase Authentication (e-posta/şifre)
- 🃏 **Kelime Kartları** — Çevir-bak yöntemi, kolay/orta/zor derecelendirme
- 🎯 **Quiz Modu** — 4 seçenekli sorular, anlık geri bildirim
- 🔁 **Tekrar Modu** — Spaced repetition mantığıyla önceki günlerin tekrarı
- 📚 **Kelime Listesi** — Ara, filtrele, ilerleme durumunu gör
- 📊 **İstatistikler** — Günlük hedef (50 kelime), seri, quiz skoru
- 🌙 **Karanlık / Aydınlık Tema** — Tercih hatırlanır
- 📱 **Mobil Uyumlu** — Alt navigasyon, responsive tasarım
- ☁️ **Firebase Firestore** — Kullanıcı başına ilerleme bulutta saklanır
- ➕ **Genişletilebilir** — Yeni deste eklemek çok kolay

---

## 🗂️ Proje Yapısı

```
yds-vocab/
├── index.html          ← Ana uygulama (tek dosya SPA)
├── firebase-config.js  ← Firebase ayarları (BU DOSYAYI DOLDURUN)
├── data/
│   ├── deck-1.js       ← Kelime 1–100
│   ├── deck-2.js       ← Kelime 101–200  (eklenecek)
│   └── ...             ← deck-15.js'e kadar (1500 kelime)
└── README.md
```

---

## ⚙️ Kurulum

### 1. Firebase Projesi Oluşturun

1. [Firebase Console](https://console.firebase.google.com)'a gidin
2. **"Add Project"** → projenize isim verin
3. **Authentication** → **Sign-in method** → **Email/Password**'u aktive edin
4. **Firestore Database** → **Create database** → **Production mode**
5. **Firestore Rules**'u şu şekilde ayarlayın:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

6. **Project Settings** → **Your apps** → **Web** → uygulamayı kaydedin
7. `firebaseConfig` değerlerini kopyalayın

### 2. Firebase Config'i Doldurun

`firebase-config.js` dosyasını açın ve değerleri yapıştırın:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};
```

### 3. GitHub Pages ile Yayınlayın

```bash
git init
git add .
git commit -m "Initial commit: YDS Vocab app"
git remote add origin https://github.com/KULLANICI/yds-vocab.git
git push -u origin main
```

GitHub → Repository → **Settings** → **Pages** → **Source: main branch, / (root)** → Save

Uygulamanız `https://KULLANICI.github.io/yds-vocab` adresinde yayında!

> ⚠️ **Not:** Firebase projenizin **Authorized domains** listesine GitHub Pages adresinizi ekleyin.  
> Firebase Console → Authentication → Settings → Authorized domains → Add domain

---

## ➕ Yeni Kelime Destesi Ekleme

1. `data/deck-2.js` dosyası oluşturun (deck-1.js formatını kopyalayın)
2. `const DECK_2 = [...]` — kelime id'leri 101'den başlasın
3. `index.html` dosyasında şu satırı bulun:
```html
<!-- Yeni desteler için: <script src="data/deck-2.js"></script> -->
```
4. Yorumu kaldırın ve kaydedin — kelimeler otomatik yüklenir!

### Kelime Formatı

```js
{
  id: 101,                         // Benzersiz numara
  en: "abandon",                   // İngilizce kelime
  tr: "terk etmek, vazgeçmek",    // Türkçe anlam
  example: "She abandoned...",     // Örnek cümle
  synonyms: ["forsake", "desert"], // Eş anlamlılar (en az 2)
  antonyms: ["keep", "maintain"],  // Zıt anlamlılar (en az 2)
  level: 2                         // Zorluk 1-5
}
```

---

## 📅 Günlük Çalışma Planı

| Gün | Yeni Kelimeler | Tekrar |
|-----|----------------|--------|
| 1   | 1–50           | —      |
| 2   | 51–100         | 1–50   |
| 3   | 101–150        | 1–100  |
| 4   | 151–200        | 51–150 |
| ... | ...            | ...    |
| 30  | 1451–1500      | Tümü   |

---

## 🛠️ Teknolojiler

- **Vanilla JS** — framework yok, hızlı yüklenme
- **Firebase v9 Compat** — Auth + Firestore
- **CSS Custom Properties** — tema sistemi
- **Google Fonts** — Sora + Fira Code
- **GitHub Pages** — ücretsiz hosting

---

## 📜 Lisans

MIT License — dilediğiniz gibi kullanabilirsiniz.
