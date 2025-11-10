import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      image: 'https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/a34cb05b-7bc1-4583-be01-dfd269278292.jpg',
      title: 'Увлажняющий крем для лица',
      description: 'Натуральный крем с экстрактом алоэ вера и маслом ши для глубокого увлажнения кожи',
      price: '1 490 ₽',
      rating: 4.5,
      badge: 'Хит продаж',
    },
    {
      image: 'https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/6e5da44b-dd1a-4259-a0eb-e2a7bbbfd4b3.jpg',
      title: 'Натуральный шампунь',
      description: 'Мягкий шампунь с экстрактом ромашки и крапивы для укрепления и блеска волос',
      price: '890 ₽',
      rating: 4,
      badge: 'Новинка',
    },
    {
      image: 'https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/a0ff6e73-d7f7-47b2-95db-0f0476e5d38e.jpg',
      title: 'Мыло ручной работы',
      description: 'Натуральное мыло с эфирными маслами и травами для нежного ухода за кожей',
      price: '450 ₽',
      rating: 5,
    },
  ];

  const benefits = [
    {
      icon: 'Leaf',
      title: '100% натуральный состав',
      description: 'Все наши продукты созданы из натуральных ингредиентов без вредных химических добавок',
    },
    {
      icon: 'Heart',
      title: 'Не тестируется на животных',
      description: 'Мы против жестокости и не тестируем нашу продукцию на животных',
    },
    {
      icon: 'Recycle',
      title: 'Экологичная упаковка',
      description: 'Используем перерабатываемые материалы для упаковки нашей продукции',
    },
    {
      icon: 'Sprout',
      title: 'Выращено с любовью',
      description: 'Наши ингредиенты выращиваются на органических фермах без пестицидов',
    },
    {
      icon: 'Award',
      title: 'Сертифицированное качество',
      description: 'Вся наша продукция имеет необходимые сертификаты качества и безопасности',
    },
    {
      icon: 'HandHeart',
      title: 'Поддержка локальных сообществ',
      description: 'Мы сотрудничаем с локальными фермерами и поддерживаем экологические инициативы',
    },
  ];

  const testimonials = [
    {
      text: 'Я пользуюсь продукцией Greenleaf уже более года и очень довольна результатом. Кожа стала значительно лучше, исчезли раздражения.',
      author: 'Анна К.',
      role: 'Постоянный клиент',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    },
    {
      text: 'Как человек с чувствительной кожей, я долго искала подходящую косметику. Greenleaf стал для меня открытием - никаких аллергических реакций!',
      author: 'Мария С.',
      role: 'Клиент 2 года',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    },
    {
      text: 'Наконец-то нашла косметику, которая действительно работает и при этом не вредит природе. Спасибо Greenleaf за качество и экологичность!',
      author: 'Елена П.',
      role: 'Клиент 6 месяцев',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    },
  ];

  const stats = [
    { number: 150, label: 'Наименований продукции' },
    { number: 12, label: 'Лет на рынке' },
    { number: 50000, label: 'Довольных клиентов' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let current = 0;
              const increment = stat.number / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                  setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = stat.number;
                    return newCounters;
                  });
                  clearInterval(timer);
                } else {
                  setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = Math.ceil(current);
                    return newCounters;
                  });
                }
              }, 30);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/a0ff6e73-d7f7-47b2-95db-0f0476e5d38e.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Экологически чистая косметика Greenleaf
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Натуральные продукты для здоровья и красоты вашей кожи. Безопасно для вас и для природы.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Каталог продукции
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              О компании
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div
            id="about-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary after:rounded-full">
              О компании Greenleaf
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              id="about-text"
              data-animate
              className={`transition-all duration-1000 delay-200 ${
                visibleElements.has('about-text') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-3xl font-bold text-primary mb-6">Наша философия</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Greenleaf - это компания, которая создает экологически чистую косметику, безопасную для вашего здоровья и окружающей среды. Наша миссия - сделать натуральные косметические продукты доступными для каждого.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Мы используем только натуральные ингредиенты, не тестируем продукцию на животных и применяем экологичную упаковку.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Наша продукция создается с любовью к природе и заботой о вашем здоровье. Мы тщательно отбираем каждый ингредиент, чтобы обеспечить высочайшее качество и эффективность.
              </p>

              <div id="stats" className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {counters[index].toLocaleString()}+
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="about-image"
              data-animate
              className={`transition-all duration-1000 delay-300 ${
                visibleElements.has('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-0 rotate-2 transition-all duration-500">
                <img
                  src="https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/6e5da44b-dd1a-4259-a0eb-e2a7bbbfd4b3.jpg"
                  alt="Продукция Greenleaf"
                  className="w-full h-auto transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div
            id="products-title"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              visibleElements.has('products-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary after:rounded-full">
              Наша продукция
            </h2>
          </div>

          <div
            id="products-filters"
            data-animate
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${
              visibleElements.has('products-filters') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {['Все товары', 'Уход за кожей', 'Уход за волосами', 'Декоративная косметика', 'Ароматерапия'].map(
              (filter, index) => (
                <Button
                  key={filter}
                  variant={index === 0 ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {filter}
                </Button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                id={`product-${index}`}
                data-animate
                className={`transition-all duration-700 ${
                  visibleElements.has(`product-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div
            id="benefits-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('benefits-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary after:rounded-full">
              Наши преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                id={`benefit-${index}`}
                data-animate
                className={`transition-all duration-700 ${
                  visibleElements.has(`benefit-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 text-primary">
                      <Icon name={benefit.icon as any} size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary after:rounded-full">
              Отзывы наших клиентов
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`snap-center transition-all duration-700 ${
                  visibleElements.has(`testimonial-${index}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/8208bc71-8bec-40ed-9b85-7591b1094cda/files/a34cb05b-7bc1-4583-be01-dfd269278292.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы заботиться о себе и природе?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сообществу Greenleaf и откройте для себя мир натуральной косметики
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90">
              Сделать заказ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
