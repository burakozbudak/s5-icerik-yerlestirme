// bu satırı silmeyin
import { siteContent } from './content.js';
console.log('Site içeriği', siteContent);

/* Kodlar buradan aşağıya */

// HTML yapısını JavaScript objesi olarak tanımlıyoruz
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

// HTML oluşturma fonksiyonları
function createElement(tag, attributes = {}, textContent = '') {
  const element = document.createElement(tag);

  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createHeader() {
  const header = createElement('header');

  // Logo
  const logo = createElement('img', {
    id: htmlTemplate.body.container.header.logo.id,
    class: htmlTemplate.body.container.header.logo.class,
    alt: htmlTemplate.body.container.header.logo.alt,
    src: htmlTemplate.body.container.header.logo.src,
  });

  // Navigasyon
  const nav = createElement('nav');
  htmlTemplate.body.container.header.nav.forEach((navItem) => {
    const link = createElement(
      'a',
      {
        href: navItem.href,
        class: navItem.class,
      },
      navItem.text
    );
    nav.appendChild(link);
  });

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}

function createCTA() {
  const ctaSection = createElement('section', { class: 'cta' });

  // CTA metni
  const ctaText = createElement('div', { class: 'cta-text' });
  const title = createElement(
    'h1',
    {},
    htmlTemplate.body.container.cta.text.title
  );
  const button = createElement(
    'button',
    {},
    htmlTemplate.body.container.cta.text.button
  );

  ctaText.appendChild(title);
  ctaText.appendChild(button);

  // CTA resmi
  const ctaImg = createElement('img', {
    id: htmlTemplate.body.container.cta.image.id,
    alt: htmlTemplate.body.container.cta.image.alt,
    src: htmlTemplate.body.container.cta.image.src,
  });

  ctaSection.appendChild(ctaText);
  ctaSection.appendChild(ctaImg);

  return ctaSection;
}

function createMainContent() {
  const mainSection = createElement('section', { class: 'main-content' });

  // Üst içerik
  const topContent = createElement('div', { class: 'top-content' });
  htmlTemplate.body.container.mainContent.topContent.forEach((content) => {
    const textContent = createElement('div', { class: 'text-content' });
    const title = createElement('h4', {}, content.title);
    const text = createElement('p', {}, content.text);

    textContent.appendChild(title);
    textContent.appendChild(text);
    topContent.appendChild(textContent);
  });

  // Orta resim
  const middleImg = createElement('img', {
    class: htmlTemplate.body.container.mainContent.middleImage.class,
    id: htmlTemplate.body.container.mainContent.middleImage.id,
    alt: htmlTemplate.body.container.mainContent.middleImage.alt,
    src: htmlTemplate.body.container.mainContent.middleImage.src,
  });

  // Alt içerik
  const bottomContent = createElement('div', { class: 'bottom-content' });
  htmlTemplate.body.container.mainContent.bottomContent.forEach((content) => {
    const textContent = createElement('div', { class: 'text-content' });
    const title = createElement('h4', {}, content.title);
    const text = createElement('p', {}, content.text);

    textContent.appendChild(title);
    textContent.appendChild(text);
    bottomContent.appendChild(textContent);
  });

  mainSection.appendChild(topContent);
  mainSection.appendChild(middleImg);
  mainSection.appendChild(bottomContent);

  return mainSection;
}

function createContact() {
  const contactSection = createElement('section', { class: 'contact' });

  const title = createElement(
    'h4',
    {},
    htmlTemplate.body.container.contact.title
  );
  contactSection.appendChild(title);

  htmlTemplate.body.container.contact.info.forEach((info) => {
    const p = createElement('p', {}, info);
    contactSection.appendChild(p);
  });

  return contactSection;
}

function createFooter() {
  const footer = createElement('footer');
  const link = createElement(
    'a',
    {
      href: '#',
      class: htmlTemplate.body.container.footer.class,
    },
    htmlTemplate.body.container.footer.text
  );

  footer.appendChild(link);
  return footer;
}

// Ana render fonksiyonu - senkron olarak çalışır
function renderPage() {
  // Mevcut body içeriğini temizle
  document.body.innerHTML = '';

  // Container div'i oluştur
  const container = createElement('div', { class: 'container' });

  // Tüm bölümleri oluştur ve container'a ekle
  container.appendChild(createHeader());
  container.appendChild(createCTA());
  container.appendChild(createMainContent());
  container.appendChild(createContact());
  container.appendChild(createFooter());

  // Body'ye ekle
  document.body.appendChild(container);

  console.log('Sayfa başarıyla JavaScript ile oluşturuldu!');
}

// Testler için hemen render et
renderPage();

// Export edilebilir fonksiyonlar
export { htmlTemplate, renderPage, createElement };
