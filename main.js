// bu satırı silmeyin
import { siteContent } from './content.js';
console.log('Site içeriği', siteContent);

/* Kodlar buradan aşağıya */
const htmlTemplate = {
  head: {
    title: 'Dijital Pazarlama Uzmanı',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap',
      },
      { rel: 'stylesheet', href: 'reset.css' },
      { rel: 'stylesheet', href: 'styles.css' },
    ],
  },
  body: {
    container: {
      header: {
        logo: {
          id: 'logo-img',
          class: 'logo',
          alt: 'Bir Şirket Sitesi logo',
          src: './images/logo.webp',
        },
        nav: [
          { text: 'Hizmetler', href: '#', class: 'italic' },
          { text: 'Portföy', href: '#', class: 'italic' },
          { text: 'Ekip', href: '#', class: 'italic' },
          { text: 'İçgörüler', href: '#', class: 'italic' },
          { text: 'Referanslar', href: '#', class: 'italic' },
        ],
      },

      cta: {
        text: {
          title: 'Dijital Pazarlama Uzmanı',
          button: 'Ücretsiz Analiz',
        },
        image: {
          id: 'cta-img',
          alt: 'CTA resmi buraya gelecek',
          src: './images/cta-img.webp',
        },
      },

      mainContent: {
        topContent: [
          {
            title: 'Çalışma Prensiplerimiz',
            text: "Her projede veri odaklı yaklaşımı benimsiyor, ölçülebilir sonuçları hedefliyoruz. Müşterilerimizin sektörlerini derinlemesine analiz ederek, hedef kitlelerinin davranışlarını anlıyor ve bu doğrultuda stratejiler geliştiriyoruz. Şeffaf raporlama sistemimizle tüm kampanya performanslarını detaylı şekilde paylaşıyor, sürekli optimizasyon ile ROI'nizi maksimize ediyoruz.",
          },
          {
            title: 'Hizmet Kapsamımız',
            text: 'Google Ads, Facebook Ads, Instagram Ads kampanyalarından SEO ve içerik pazarlamaya, e-ticaret optimizasyonundan sosyal medya yönetimine kadar dijital pazarlamanın tüm alanlarında hizmet veriyoruz. 360 derece dijital pazarlama yaklaşımımızla markanızın online görünürlüğünü artırıyor ve satışlarınızı büyütüyoruz.',
          },
        ],

        middleImage: {
          class: 'middle-img',
          id: 'middle-img',
          alt: 'Accent image buraya gelecek',
          src: './images/graphs.webp',
        },

        bottomContent: [
          {
            title: 'Markanızı dijital dünyada başarıya taşıyoruz',
            text: "5 yılı aşkın tecrübemizle 500'den fazla projeyi başarıyla tamamladık. Küçük işletmelerden büyük şirketlere kadar her ölçekte müşterimize özel stratejiler geliştiriyor, dijital pazarlama hedeflerine ulaşmalarını sağlıyoruz.",
          },
          {
            title: 'Veri odaklı yaklaşım - ölçülebilir sonuçlar',
            text: "Her kampanyamızı detaylı analiz ve araştırma ile başlatıyor, sürekli A/B test yaparak optimum performansı yakalıyoruz. Gerçek zamanlı raporlama sistemimizle kampanya performanslarını şeffaf şekilde paylaşıyor, hedeflenen KPI'ları tutturmak için sürekli iyileştirmeler yapıyoruz.",
          },
          {
            title: 'Sizin için özel stratejiler geliştiriyoruz',
            text: 'Her sektörün kendine özgü dinamikleri olduğunu biliyor, bu doğrultuda size özel pazarlama stratejileri geliştiriyoruz. Hedef kitlenizi analiz ediyor, rakip analizi yapıyor ve markanızın dijital dünyada öne çıkması için yaratıcı çözümler sunuyoruz. Uzun vadeli ortaklık anlayışımızla markanızın büyümesine katkı sağlıyoruz.',
          },
        ],
      },

      contact: {
        title: 'İletişim',
        info: [
          'Maslak Mahallesi Büyükdere Cad. No:255 Sarıyer İstanbul, Türkiye',
          '+90 (212) 789 45 61',
          'info@dijitalpazarlamaajansı.com',
        ],
      },

      footer: {
        text: 'Copyright Dijital Pazarlama Ajansı 2025',
        class: 'bold',
      },
    },
  },
};
