import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'features', label: 'Возможности', icon: 'Sparkles' },
    { id: 'pricing', label: 'Тарифы', icon: 'CreditCard' },
    { id: 'learning', label: 'Обучение', icon: 'GraduationCap' },
    { id: 'blog', label: 'Блог', icon: 'BookOpen' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
    { id: 'account', label: 'Личный кабинет', icon: 'User' },
  ];

  const features = [
    {
      icon: 'Palette',
      title: 'Дизайн без ограничений',
      description: 'Создавайте уникальные дизайны с помощью интуитивного редактора и готовых блоков',
    },
    {
      icon: 'Zap',
      title: 'Быстрая публикация',
      description: 'Опубликуйте сайт за несколько кликов на надёжном хостинге',
    },
    {
      icon: 'Smartphone',
      title: 'Адаптивность',
      description: 'Все сайты автоматически адаптируются под любые устройства',
    },
    {
      icon: 'Code',
      title: 'Без кода',
      description: 'Создавайте профессиональные сайты без знания программирования',
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазин',
      description: 'Встроенные инструменты для создания онлайн-магазинов',
    },
    {
      icon: 'BarChart',
      title: 'Аналитика',
      description: 'Отслеживайте посещаемость и поведение пользователей',
    },
  ];

  const pricingPlans = [
    {
      name: 'Бесплатный',
      price: '0',
      period: 'навсегда',
      features: ['1 сайт', 'Базовые блоки', 'Поддомен', 'Реклама'],
      popular: false,
    },
    {
      name: 'Персональный',
      price: '500',
      period: 'в месяц',
      features: ['3 сайта', 'Все блоки', 'Свой домен', 'Без рекламы', 'Email поддержка'],
      popular: true,
    },
    {
      name: 'Бизнес',
      price: '1500',
      period: 'в месяц',
      features: ['Безлимитно сайтов', 'Все возможности', 'Приоритет поддержки', 'CRM интеграция', 'API доступ'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WebBuilder
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.slice(0, 6).map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="User" size={16} />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 animate-scale-in" variant="secondary">
            🚀 Создавайте сайты за минуты
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-tight">
            Конструктор сайтов нового поколения
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создавайте профессиональные сайты без программирования. 
            Более 500 готовых блоков, интуитивный редактор и мгновенная публикация.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Rocket" size={20} />
              Создать сайт бесплатно
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
              <Icon name="Play" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-accent">
            Возможности платформы
          </h2>
          <p className="text-gray-600 text-lg">
            Всё необходимое для создания современного сайта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-accent">
            Выберите свой тариф
          </h2>
          <p className="text-gray-600 text-lg">
            Начните бесплатно или выберите план для профессионалов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                  Популярный
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-accent">{plan.price}</span>
                  <span className="text-gray-600 ml-2">₽</span>
                  <p className="text-gray-500 mt-1">{plan.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Готовы создать свой сайт?
            </CardTitle>
            <CardDescription className="text-lg">
              Присоединяйтесь к тысячам пользователей, которые уже создали свои сайты
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <Button size="lg" className="gap-2 text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Rocket" size={20} />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
              <Icon name="HelpCircle" size={20} />
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-accent text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold">WebBuilder</span>
              </div>
              <p className="text-gray-300">
                Современный конструктор сайтов для всех
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Возможности</li>
                <li className="hover:text-white cursor-pointer">Тарифы</li>
                <li className="hover:text-white cursor-pointer">Шаблоны</li>
                <li className="hover:text-white cursor-pointer">Обновления</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Документация</li>
                <li className="hover:text-white cursor-pointer">Видеоуроки</li>
                <li className="hover:text-white cursor-pointer">Блог</li>
                <li className="hover:text-white cursor-pointer">Вебинары</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Поддержка</li>
                <li className="hover:text-white cursor-pointer">Email</li>
                <li className="hover:text-white cursor-pointer">Telegram</li>
                <li className="hover:text-white cursor-pointer">VK</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebBuilder. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;