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
      brand: 'Bugatti',
      model: 'La Voiture Noire',
      price: '1 200 000 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/60d3c3ab-1bb3-4b62-ab05-052a66278ba9.jpg',
      features: ['8.0L W16', '1500 л.с.', '0-100 за 2.4 сек']
    },
    {
      id: 2,
      brand: 'Rolls-Royce',
      model: 'Boat Tail',
      price: '2 100 000 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/19eed2ac-e335-41e9-bb39-6fd22d57716e.jpg',
      features: ['6.75L V12', '571 л.с.', 'Эксклюзив']
    },
    {
      id: 3,
      brand: 'Pagani',
      model: 'Zonda HP Barchetta',
      price: '1 400 000 000 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/4a2f4bb3-886c-487f-963f-9e4d8a3e8a54.jpg',
      features: ['7.3L V12', '789 л.с.', 'Лимитированная серия']
    }
  ];

  const newModels = [
    { brand: 'Bugatti', model: 'Centodieci', year: 'Эксклюзив' },
    { brand: 'Koenigsegg', model: 'Jesko Absolut', year: 'Лимитед' },
    { brand: 'McLaren', model: 'Speedtail', year: 'Уникальный' }
  ];

  const services = [
    { title: 'VIP Обслуживание', icon: 'Crown' },
    { title: 'Индивидуальный подход', icon: 'Award' },
    { title: 'Эксклюзивный сервис', icon: 'Gem' },
    { title: 'Консьерж служба', icon: 'Sparkles' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <img src="https://cdn.poehali.dev/files/97497f8f-c824-4e7c-9893-76f62bde170f.jpeg" alt="ÆRS Logo" className="h-14 w-auto" />
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
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6">
              <span className="gold-text">Самые дорогие</span>
              <br />
              <span className="text-white">автомобили</span>
              <br />
              <span className="red-accent">в мире</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Эксклюзивные гиперкары стоимостью от миллиарда рублей
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
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
              >
                Записаться на тест-драйв
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background" id="catalog">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="gold-text">Эксклюзивная</span> коллекция
          </h3>
          <p className="text-center text-muted-foreground mb-16">Самые дорогие автомобили планеты</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id} 
                className="overflow-hidden border-border hover:border-primary transition-all duration-500 animate-slide-up group bg-black/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-md font-bold shadow-lg">
                    {car.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-heading font-bold mb-2 gold-text">{car.brand}</h4>
                  <p className="text-muted-foreground mb-4">{car.model}</p>
                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
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
          <h3 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="red-accent">Эксклюзивные</span> <span className="gold-text">новинки</span>
          </h3>
          <p className="text-center text-muted-foreground mb-16">Лимитированные гиперкары</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newModels.map((model, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:border-primary transition-all duration-300 animate-scale-in bg-black/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-accent">
                  <Icon name="Sparkles" size={32} className="text-accent" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2 gold-text">{model.brand}</h4>
                <p className="text-2xl font-bold text-primary mb-2">{model.model}</p>
                <p className="text-muted-foreground red-accent">{model.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-6">
                <span className="gold-text">Тест-драйв</span> <span className="red-accent">класса люкс</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Испытайте превосходство на собственном опыте. Запишитесь на эксклюзивный тест-драйв 
                и почувствуйте мощь самых дорогих автомобилей в мире.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">VIP время</p>
                    <p className="text-sm text-muted-foreground">Индивидуальный график</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border border-accent">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Эксклюзивная локация</p>
                    <p className="text-sm text-muted-foreground">Доставка к вам</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-black/50 border-primary/30">
              <h4 className="text-2xl font-heading font-bold mb-6">
                <span className="gold-text">Записаться</span> на тест-драйв
              </h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-background/50 border-primary/30" />
                <Input type="tel" placeholder="Телефон" className="bg-background/50 border-primary/30" />
                <Input type="email" placeholder="Email" className="bg-background/50 border-primary/30" />
                <Textarea placeholder="Комментарий" rows={4} className="bg-background/50 border-primary/30" />
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="gold-text">VIP</span> обслуживание
          </h3>
          <p className="text-center text-muted-foreground mb-16">Эксклюзивный сервис премиум-класса</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:border-primary transition-all duration-300 bg-black/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
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
          <h3 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="gold-text">О нас</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            ÆRS — это не просто автосалон. Это эксклюзивная галерея самых дорогих автомобилей в мире. 
            Мы специализируемся на продаже уникальных гиперкаров стоимостью от миллиарда рублей.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-heading font-bold gold-text mb-2">20+</p>
              <p className="text-muted-foreground">Лет эксклюзива</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold red-accent mb-2">500+</p>
              <p className="text-muted-foreground">VIP клиентов</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">15</p>
              <p className="text-muted-foreground">Уникальных моделей</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 luxury-gradient border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/97497f8f-c824-4e7c-9893-76f62bde170f.jpeg" alt="ÆRS Logo" className="h-20 w-auto mb-4" />
              <p className="text-white/60">Самые дорогие автомобили в мире</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-primary mb-4">Контакты</h5>
              <div className="space-y-2 text-white/60">
                <p>+7 (495) 999-99-99</p>
                <p>vip@aers.world</p>
                <p>Москва, Кутузовский пр-т, 1</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-primary mb-4">Режим работы</h5>
              <div className="space-y-2 text-white/60">
                <p>Пн-Пт: 10:00 - 22:00</p>
                <p>Сб-Вс: 11:00 - 21:00</p>
                <p className="red-accent">VIP запись 24/7</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-primary mb-4">Соцсети</h5>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-accent text-accent hover:bg-accent/10">
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
