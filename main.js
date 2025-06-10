import { siteContent } from './content.js';

const htmlTemplate = {
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
            text: 'Google Ads, Facebook Ads, Instagram Ads, SEO, e-posta pazarlama ve içerik üretimi gibi birçok dijital pazarlama kanalında uzmanız. Tüm hizmetlerimizi entegre bir stratejiyle sunarak, maksimum etki yaratmayı hedefliyoruz.',
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
            title: 'Markanızı di̇ji̇tal dünyada başarıya taşıyoruz',
            text: "5 yılı aşkın tecrübemizle 500'den fazla projeyi başarıyla tamamladık. Küçük işletmelerden büyük şirketlere kadar her ölçekte müşterimize özel stratejiler geliştiriyor, dijital pazarlama hedeflerine ulaşmalarını sağlıyoruz.",
          },
          {
            title: 'Veri odaklı yaklaşım - ölçülebilir sonuçlar',
            text: 'Her kampanyamızı detaylı analiz ve araştırma ile planlıyor, doğru hedef kitleye ulaşmayı garanti ediyoruz. Bu sayede müşterilerimizin bütçelerini en verimli şekilde kullanmalarını sağlıyoruz.',
          },
          {
            title: 'Sizin için özel stratejiler geliştiriyoruz',
            text: 'Her sektörün kendine özgü dinamikleri olduğunu biliyor, bu nedenle size özel stratejiler geliştiriyoruz. Sizin başarınız, bizim de başarımızdır.',
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

// Sayfa içeriğini yerleştir
function renderPage() {
  // Logo
  const logo = document.getElementById('logo-img');
  logo.src = htmlTemplate.body.container.header.logo.src;
  logo.classList.add(htmlTemplate.body.container.header.logo.class);
  logo.alt = htmlTemplate.body.container.header.logo.alt;

  // Nav linkleri
  const navLinks = document.querySelectorAll('header nav a');
  htmlTemplate.body.container.header.nav.forEach((item, i) => {
    navLinks[i].textContent = item.text;
    navLinks[i].href = item.href;
    navLinks[i].classList.add(item.class);
  });

  // CTA Başlığı ve Butonu
  document.querySelector('.cta-text h1').textContent =
    htmlTemplate.body.container.cta.text.title;
  document.querySelector('.cta-text button').textContent =
    htmlTemplate.body.container.cta.text.button;

  // CTA Görseli
  const ctaImg = document.getElementById('cta-img');
  ctaImg.src = htmlTemplate.body.container.cta.image.src;
  ctaImg.alt = htmlTemplate.body.container.cta.image.alt;

  // Middle Img
  const middleImg = document.getElementById('middle-img');
  middleImg.src = htmlTemplate.body.container.mainContent.middleImage.src;
  middleImg.alt = htmlTemplate.body.container.mainContent.middleImage.alt;

  // Top Content
  const topContentBlocks = document.querySelectorAll(
    '.top-content .text-content'
  );
  htmlTemplate.body.container.mainContent.topContent.forEach((block, i) => {
    topContentBlocks[i].querySelector('h4').textContent = block.title;
    topContentBlocks[i].querySelector('p').textContent = block.text;
  });

  // Bottom Content
  const bottomContentBlocks = document.querySelectorAll(
    '.bottom-content .text-content'
  );
  htmlTemplate.body.container.mainContent.bottomContent.forEach((block, i) => {
    bottomContentBlocks[i].querySelector('h4').textContent = block.title;
    bottomContentBlocks[i].querySelector('p').textContent = block.text;
  });

  // Contact
  const contactSection = document.querySelector('.contact');
  contactSection.querySelector('h4').textContent =
    htmlTemplate.body.container.contact.title;
  const contactPs = contactSection.querySelectorAll('p');
  htmlTemplate.body.container.contact.info.forEach((text, i) => {
    contactPs[i].textContent = text;
  });

  // Footer
  const footerLink = document.querySelector('footer a');
  footerLink.textContent = htmlTemplate.body.container.footer.text;
  footerLink.classList.add(htmlTemplate.body.container.footer.class);
}
// Sayfayı hemen render et
renderPage();

// Export edilebilir fonksiyonlar
export { htmlTemplate, renderPage };
