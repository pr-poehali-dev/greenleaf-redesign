import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1f6b44] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary">
              Greenleaf
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Экологически чистая косметика для вашего здоровья и красоты. Натуральные продукты, безопасные для вас и природы.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon name={social as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary">
              Продукция
            </h3>
            <ul className="space-y-3">
              {['Уход за кожей', 'Уход за волосами', 'Декоративная косметика', 'Ароматерапия', 'Подарочные наборы'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white hover:pl-2 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary">
              Компания
            </h3>
            <ul className="space-y-3">
              {['О нас', 'Наша философия', 'Вакансии', 'Партнеры', 'Блог'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white hover:pl-2 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary">
              Подписка
            </h3>
            <p className="text-white/80 mb-4">
              Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; 2024 Greenleaf. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
