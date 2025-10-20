import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      brand: 'Nike',
      name: 'Air Max 270',
      category: 'sneakers',
      price: '14 990 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/ad22fb5e-55e3-44e8-a0a2-f395d0c9523c.jpg',
      tag: 'Хит'
    },
    {
      id: 2,
      brand: 'Adidas',
      name: 'Originals Hoodie',
      category: 'clothing',
      price: '8 490 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/1337bcf3-37ae-4116-b196-2c2525e8e925.jpg',
      tag: 'Новинка'
    },
    {
      id: 3,
      brand: 'Puma',
      name: 'RS-X Sneakers',
      category: 'sneakers',
      price: '12 990 ₽',
      image: 'https://cdn.poehali.dev/projects/7c06e54f-fffe-4752-bdb8-69bc98a0b4d4/files/dd9a14a9-0fff-4ce2-81f2-0d58583ac5a7.jpg',
      tag: 'Sale'
    }
  ];

  const brands = [
    { name: 'Nike', icon: 'Zap' },
    { name: 'Adidas', icon: 'Triangle' },
    { name: 'Puma', icon: 'Sparkles' },
    { name: 'Reebok', icon: 'Star' }
  ];

  const categories = [
    { id: 'all', name: 'Всё', icon: 'Grid' },
    { id: 'sneakers', name: 'Кроссовки', icon: 'Footprints' },
    { id: 'clothing', name: 'Одежда', icon: 'Shirt' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Watch' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold gradient-text">ÆRS</h1>
            <div className="hidden md:flex gap-8 items-center">
              {['Каталог', 'Бренды', 'Sale', 'Новинки', 'О нас'].map((item) => (
                <button
                  key={item}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-6 py-2 text-sm font-bold">
              НОВАЯ КОЛЛЕКЦИЯ 2025
            </Badge>
            <h2 className="text-6xl md:text-8xl font-heading font-black mb-6">
              <span className="gradient-text">Стиль</span>
              <br />
              <span className="text-white">без границ</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Оригинальная брендовая одежда и обувь Nike, Adidas, Puma. Только лучшее для молодёжи.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 text-lg neon-glow"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent/10 px-10 py-6 text-lg font-bold"
              >
                <Icon name="Flame" size={20} className="mr-2" />
                Sale до -50%
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id 
                  ? 'bg-primary hover:bg-primary/90 font-bold' 
                  : 'border-white/30 text-white hover:border-primary hover:text-primary'}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden bg-black/40 border-2 border-white/10 hover:border-primary transition-all duration-500 animate-scale-in group backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold">
                    {product.tag}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-primary hover:bg-primary/90 font-bold">
                      <Icon name="ShoppingBag" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-accent font-bold mb-2">{product.brand}</p>
                  <h4 className="text-xl font-heading font-bold text-white mb-3">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold gradient-text">{product.price}</p>
                    <Button size="icon" variant="ghost" className="text-white hover:text-accent">
                      <Icon name="Heart" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="gradient-text">Топовые</span> <span className="text-white">бренды</span>
          </h3>
          <p className="text-center text-white/60 mb-16">100% оригинальная продукция</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-black/40 border-2 border-white/10 hover:border-primary transition-all duration-300 cursor-pointer group backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon name={brand.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-white text-lg">{brand.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground font-bold">
                ЭКСКЛЮЗИВ
              </Badge>
              <h3 className="text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Подписка</span>
                <br />
                <span className="text-white">на новинки</span>
              </h3>
              <p className="text-lg text-white/70 mb-8">
                Будь первым, кто узнает о новых поступлениях, эксклюзивных коллекциях и крутых акциях!
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Твой email"
                  className="flex-1 px-6 py-4 bg-black/40 border-2 border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-primary focus:outline-none backdrop-blur-sm"
                />
                <Button className="bg-primary hover:bg-primary/90 px-8 font-bold">
                  Подписаться
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-black/40 border-2 border-white/10 backdrop-blur-sm">
                <Icon name="Truck" size={40} className="text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Быстрая доставка</h4>
                <p className="text-sm text-white/60">По всей России</p>
              </Card>
              <Card className="p-6 bg-black/40 border-2 border-white/10 backdrop-blur-sm">
                <Icon name="ShieldCheck" size={40} className="text-primary mb-4" />
                <h4 className="font-bold text-white mb-2">100% оригинал</h4>
                <p className="text-sm text-white/60">Гарантия качества</p>
              </Card>
              <Card className="p-6 bg-black/40 border-2 border-white/10 backdrop-blur-sm">
                <Icon name="CreditCard" size={40} className="text-accent mb-4" />
                <h4 className="font-bold text-white mb-2">Удобная оплата</h4>
                <p className="text-sm text-white/60">Любым способом</p>
              </Card>
              <Card className="p-6 bg-black/40 border-2 border-white/10 backdrop-blur-sm">
                <Icon name="RotateCcw" size={40} className="text-primary mb-4" />
                <h4 className="font-bold text-white mb-2">Обмен/возврат</h4>
                <p className="text-sm text-white/60">14 дней</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-heading font-bold mb-6">
            <span className="gradient-text">Почему выбирают</span> <span className="text-white">нас?</span>
          </h3>
          <p className="text-white/70 mb-12 text-lg">
            Мы — крупнейший магазин брендовой молодёжной одежды. Работаем с официальными поставщиками Nike, Adidas, Puma и других топовых брендов.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-heading font-bold gradient-text mb-2">10K+</p>
              <p className="text-white/60">Довольных клиентов</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold text-accent mb-2">500+</p>
              <p className="text-white/60">Моделей в наличии</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold text-primary mb-2">24/7</p>
              <p className="text-white/60">Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black/50 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-heading font-bold gradient-text mb-4">ÆRS</h4>
              <p className="text-white/60">Твой стиль — наша страсть</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Контакты</h5>
              <div className="space-y-2 text-white/60">
                <p>+7 (800) 555-35-35</p>
                <p>shop@aers.store</p>
                <p>Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Помощь</h5>
              <div className="space-y-2 text-white/60">
                <p className="hover:text-primary cursor-pointer transition">Доставка</p>
                <p className="hover:text-primary cursor-pointer transition">Оплата</p>
                <p className="hover:text-primary cursor-pointer transition">Возврат</p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-white mb-4">Мы в соцсетях</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-accent text-accent hover:bg-accent/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 pt-8 border-t border-white/10">
            <p>© 2025 ÆRS Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
