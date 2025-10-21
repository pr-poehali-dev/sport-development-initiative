import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDay, setSelectedDay] = useState('Понедельник');

  const schedule = {
    'Понедельник': [
      { time: '10:00-12:00', class: 'Утренняя тренировка', trainer: 'Валентина Петровна', duration: '120 мин' },
      { time: '17:00-19:00', class: 'Вечерняя тренировка', trainer: 'Николай Сергеевич', duration: '120 мин' }
    ],
    'Вторник': [
      { time: '10:00-12:00', class: 'Утренняя тренировка', trainer: 'Николай Сергеевич', duration: '120 мин' },
      { time: '17:00-19:00', class: 'Вечерняя тренировка', trainer: 'Валентина Петровна', duration: '120 мин' }
    ],
    'Среда': [
      { time: '10:00-12:00', class: 'Утренняя тренировка', trainer: 'Валентина Петровна', duration: '120 мин' },
      { time: '17:00-19:00', class: 'Вечерняя тренировка', trainer: 'Николай Сергеевич', duration: '120 мин' }
    ],
    'Четверг': [
      { time: '10:00-12:00', class: 'Утренняя тренировка', trainer: 'Николай Сергеевич', duration: '120 мин' },
      { time: '17:00-19:00', class: 'Вечерняя тренировка', trainer: 'Валентина Петровна', duration: '120 мин' }
    ],
    'Пятница': [
      { time: '10:00-12:00', class: 'Утренняя тренировка', trainer: 'Валентина Петровна', duration: '120 мин' },
      { time: '17:00-19:00', class: 'Вечерняя тренировка', trainer: 'Николай Сергеевич', duration: '120 мин' }
    ],
    'Суббота': [
      { time: 'Выходной', class: 'Отдых', trainer: '', duration: '' }
    ],
    'Воскресенье': [
      { time: '12:00-13:00', class: 'Воскресная тренировка', trainer: 'Валентина Петровна', duration: '60 мин' }
    ]
  };

  const trainers = [
    {
      name: 'Валентина Петровна',
      specialty: 'К1, Олимпийский чемпион',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/3f7e9e3a-f392-48d3-bcfa-ad1014dc6ade.jpg'
    },
    {
      name: 'Николай Сергеевич',
      specialty: 'С1, Мастер спорта',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/3f7e9e3a-f392-48d3-bcfa-ad1014dc6ade.jpg'
    }
  ];

  const sections = [
    {
      icon: 'Waves',
      title: 'Гребной слалом К1',
      description: 'Каяк-одиночка - классическая дисциплина для начинающих и профессионалов'
    },
    {
      icon: 'Trophy',
      title: 'Слалом С1',
      description: 'Каноэ-одиночка - высший пилотаж гребного слалома'
    },
    {
      icon: 'Users',
      title: 'Юниорские группы',
      description: 'Программы подготовки для детей от 8 лет с опытными тренерами'
    },
    {
      icon: 'Zap',
      title: 'Бурная вода',
      description: 'Искусственная трасса с регулируемым потоком для тренировок'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/45aa88e2-9024-4a5b-8675-aa73bceb40dd.jpg',
    'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/c99de954-993c-4ea7-a6b1-0a3b4a348d7b.jpg',
    'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/45aa88e2-9024-4a5b-8675-aa73bceb40dd.jpg',
    'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/c99de954-993c-4ea7-a6b1-0a3b4a348d7b.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 78, 137, 0.7), rgba(255, 107, 53, 0.7)), url('https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/45aa88e2-9024-4a5b-8675-aa73bceb40dd.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-primary/70 to-secondary/80" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/5fa0cca1-9cfe-468d-973e-cfeef3e576f1.jpg" 
              alt="Olympic Rings" 
              className="w-48 h-48 object-contain drop-shadow-2xl animate-pulse-glow"
            />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            ГРЕБНОЙ СЛАЛОМ
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-10 font-light max-w-3xl mx-auto">
            Покоряй стремительные пороги. Стань чемпионом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
            >
              Начать тренировки
              <Icon name="ArrowRight" className="ml-2" size={24} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary text-lg px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105"
            >
              Пробное занятие
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-accent mb-2">120+</div>
              <div className="text-white/90 font-medium">Спортсменов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-accent mb-2">3</div>
              <div className="text-white/90 font-medium">Олимпийца</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-accent mb-2">250м</div>
              <div className="text-white/90 font-medium">Трасса</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-accent mb-2">15</div>
              <div className="text-white/90 font-medium">Лет опыта</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white/60" />
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Наши направления
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon name={section.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Расписание тренировок
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8 bg-white shadow-lg rounded-2xl p-2 h-auto">
              {Object.keys(schedule).map((day) => (
                <TabsTrigger 
                  key={day} 
                  value={day}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-bold py-3 rounded-xl transition-all"
                >
                  {day.slice(0, 2)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(schedule).map(([day, classes]) => (
              <TabsContent key={day} value={day} className="space-y-4 animate-fade-in">
                {classes.map((item, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-xl transition-all duration-300 hover:border-primary border-2 cursor-pointer group"
                  >
                    <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-primary to-secondary text-white font-black text-2xl w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          {item.time}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {item.class}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="User" size={18} />
                            <span>{item.trainer}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="text-base px-4 py-2 bg-accent/20 text-accent-foreground font-semibold">
                          <Icon name="Clock" size={16} className="mr-2" />
                          {item.duration}
                        </Badge>
                        <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Наши тренеры
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-muted-foreground mb-3 font-medium">
                    {trainer.specialty}
                  </p>
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                    {trainer.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Тренировки на воде
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary via-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Готовы покорить поток?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Первая тренировка бесплатно! Всё снаряжение предоставляется
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
            >
              Получить пробное занятие
              <Icon name="Zap" className="ml-2" size={24} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary text-lg px-12 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;