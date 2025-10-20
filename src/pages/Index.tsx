import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cars = [
    {
      id: 1,
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      price: '12 500 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/55502cba-b41b-4d47-8765-8eb2b7a361a1.jpg',
      features: ['4.0L V8', '469 л.с.', '0-100 за 4.5 сек']
    },
    {
      id: 2,
      brand: 'BMW',
      model: '7 Series',
      price: '9 800 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/586424c3-071c-44ab-b41b-ab02a02e61c4.jpg',
      features: ['3.0L I6', '375 л.с.', '0-100 за 5.2 сек']
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'A8',
      price: '8 900 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/8341b98f-7fad-407c-aac2-7fb37ebe691c.jpg',
      features: ['3.0L V6', '340 л.с.', '0-100 за 5.6 сек']
    }
  ];

  const newModels = [
    { brand: 'Mercedes-Benz', model: 'EQS', year: '2025' },
    { brand: 'BMW', model: 'iX', year: '2025' },
    { brand: 'Audi', model: 'e-tron GT', year: '2025' }
  ];

  const services = [
    { title: 'Регулярное ТО', icon: 'Wrench' },
    { title: 'Диагностика', icon: 'Search' },
    { title: 'Кузовной ремонт', icon: 'Car' },
    { title: 'Оригинальные запчасти', icon: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold text-primary">ÆRS</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Каталог', 'Новинки', 'Тест-драйв', 'Сервис', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 luxury-gradient">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
              Элегантность. Роскошь. Превосходство.
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Эксклюзивные премиум-автомобили от ведущих мировых брендов
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg"
              >
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                Записаться на тест-драйв
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background" id="catalog">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Наш каталог</h3>
          <p className="text-center text-muted-foreground mb-16">Выберите автомобиль своей мечты</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id} 
                className="overflow-hidden border-border hover:border-primary transition-all duration-500 animate-slide-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-md font-bold">
                    {car.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-heading font-bold mb-2">{car.brand}</h4>
                  <p className="text-muted-foreground mb-4">{car.model}</p>
                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Новинки 2025</h3>
          <p className="text-center text-muted-foreground mb-16">Будущее уже здесь</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newModels.map((model, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">{model.brand}</h4>
                <p className="text-2xl font-bold text-primary mb-2">{model.model}</p>
                <p className="text-muted-foreground">{model.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-6">Тест-драйв</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Испытайте превосходство на собственном опыте. Запишитесь на тест-драйв 
                и почувствуйте мощь и комфорт премиум-автомобиля.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Удобное время</p>
                    <p className="text-sm text-muted-foreground">Выберите подходящий слот</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Удобная локация</p>
                    <p className="text-sm text-muted-foreground">Центр города или к вам</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h4 className="text-2xl font-heading font-bold mb-6">Записаться на тест-драйв</h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Комментарий" rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Сервисное обслуживание</h3>
          <p className="text-center text-muted-foreground mb-16">Профессиональный уход за вашим автомобилем</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:border-primary transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold">{service.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">О нас</h3>
          <p className="text-center text-muted-foreground mb-12">
            ÆRS — это не просто автосалон. Это пространство, где встречаются элегантность, 
            роскошь и превосходство. Мы представляем эксклюзивные автомобили премиум-класса 
            от ведущих мировых производителей.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Лет на рынке</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Моделей в наличии</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 luxury-gradient border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">ÆRS</h4>
              <p className="text-white/60">Премиум-автомобили для ценителей совершенства</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Контакты</h5>
              <div className="space-y-2 text-white/60">
                <p>+7 (495) 123-45-67</p>
                <p>info@aers.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Время работы</h5>
              <div className="space-y-2 text-white/60">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 20:00</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Соцсети</h5>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 pt-8 border-t border-primary/20">
            <p>© 2025 ÆRS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
