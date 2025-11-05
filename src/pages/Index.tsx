import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDay, setSelectedDay] = useState('Понедельник');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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
      specialty: 'Заслуженный тренер Башкирии',
      experience: '20 лет опыта',
      image: 'https://cdn.poehali.dev/files/b1c166ac-0046-4826-a53b-58614e826728.png'
    },
    {
      name: 'Николай Сергеевич',
      specialty: 'Мастер спорта по туризму',
      experience: '20 лет опыта',
      image: 'https://cdn.poehali.dev/files/bd4491a5-0a7c-4514-b0e9-0883c13b51b5.jpg'
    }
  ];

  const sections = [
    {
      icon: 'Waves',
      title: 'Гребной слалом К1',
      description: 'Каяк-одиночка - классическая дисциплина для начинающих и профессионалов',
      details: 'К1 (каяк-одиночка) — олимпийская дисциплина гребного слалома. Спортсмен сидит в лодке лицом вперед и использует двухлопастное весло.',
      facts: [
        'Длина каяка К1: 3,5 метра, минимальный вес 9 кг',
        'На трассе располагается 18-25 ворот, которые нужно пройти за минимальное время',
        'Красно-белые ворота проходятся против течения',
        'Зелено-белые ворота проходятся по течению',
        'Касание ворот веслом или лодкой добавляет 2 секунды штрафа',
        'Пропуск ворот или их прохождение в неправильном направлении добавляет 50 секунд'
      ]
    },
    {
      icon: 'Trophy',
      title: 'Слалом С1',
      description: 'Каноэ-одиночка - высший пилотаж гребного слалома',
      details: 'С1 (каноэ-одиночка) — самая техничная дисциплина. Спортсмен стоит на одном колене и использует однолопастное весло.',
      facts: [
        'Длина каноэ С1: 3,5 метра, минимальный вес 9 кг',
        'Требует отличного баланса и силы корпуса',
        'Спортсмен гребет только с одной стороны, меняя сторону по необходимости',
        'Считается самой зрелищной дисциплиной гребного слалома'
      ]
    },
    {
      icon: 'Flame',
      title: 'Каяк экстрим',
      description: 'Экстремальное направление для опытных спортсменов и любителей адреналина',
      details: 'Каяк экстрим — зрелищная гонка с массовым стартом. Участники стартуют на наклонной рампе и соскальзывают в воду с высоты более 2 метров. Побеждает тот, кто первым достигнет финиша.',
      facts: [
        'Старт с наклонной рампы высотой более 2 метров',
        'Массовый заезд — одновременно стартуют несколько спортсменов',
        'Разрешён контакт с другими лодками и вехами ворот',
        'Обязательное выполнение переворота на дистанции',
        'Пропуск ворот или невыполнение переворота — дисквалификация',
        'Побеждает тот, кто первым пересечёт финишную черту'
      ]
    },
    {
      icon: 'Users',
      title: 'Юниорские группы',
      description: 'Программы подготовки для детей от 8 лет с опытными тренерами',
      details: 'Специальные программы для детей и подростков. Обучение с нуля до участия в соревнованиях.',
      facts: [
        'Принимаем детей от 8 лет',
        'Все снаряжение предоставляется',
        'Безопасность — наш приоритет: шлемы, жилеты, инструктаж',
        'Участие в региональных и всероссийских соревнованиях'
      ]
    },
    {
      icon: 'Zap',
      title: 'Бурная вода',
      description: 'Искусственная трасса с регулируемым потоком для тренировок',
      details: 'Современная тренировочная база с искусственным порогом для круглогодичных тренировок.',
      facts: [
        'Длина трассы: 250 метров',
        'Регулируемый поток воды',
        'Возможность установки различных конфигураций ворот',
        'Тренировки возможны в любое время года'
      ]
    }
  ];

  const trainingGallery = [
    'https://cdn.poehali.dev/files/e4c4a606-8f12-4fab-81fa-8f2d8fab8bdb.jpg',
    'https://cdn.poehali.dev/files/7623be99-2990-4bc5-a07e-3378bcab4f60.jpg',
    'https://cdn.poehali.dev/files/945bbafe-a063-4ff4-a447-d97af9e775a6.jpg',
    'https://cdn.poehali.dev/files/b7247e7c-f97f-4841-8202-35056704ff93.jpg'
  ];

  const teamGallery = [
    'https://cdn.poehali.dev/files/5c5103fc-ec75-4c14-b4ec-a574e2b9764f.jpg',
    'https://cdn.poehali.dev/files/cf2c0e17-a02c-491f-9796-0379710ea67c.jpg'
  ];

  const canalGallery = [
    {
      image: 'https://cdn.poehali.dev/files/101b4a66-702d-4592-b849-be40d9d2931c.jpg',
      name: 'Гребной канал «Аврора»',
      location: 'Уфа, Башкортостан'
    },
    {
      image: 'https://cdn.poehali.dev/files/95700d3f-a315-4f34-870a-740221712240.jpg',
      name: 'Гребной канал «Аврора»',
      location: 'Уфа, Башкортостан'
    },
    {
      image: 'https://cdn.poehali.dev/files/981045cd-e291-4ca5-8d78-f6d93a6bbb19.png',
      name: 'Гребной канал «Москва»',
      location: 'Москва, Крылатское'
    },
    {
      image: 'https://cdn.poehali.dev/files/4964ac58-6bed-4f11-8dc3-09921d320d5f.png',
      name: 'Гребной канал «Москва»',
      location: 'Москва, Крылатское'
    },
    {
      image: 'https://cdn.poehali.dev/files/2e16a6a0-9fbc-4ec7-9509-cd59c2372fc7.png',
      name: 'Гребной канал «Окуловка»',
      location: 'Новгородская область'
    },
    {
      image: 'https://cdn.poehali.dev/files/bd54fa8f-0e9b-4ea2-97da-294ef8f0546b.png',
      name: 'Гребной канал «Окуловка»',
      location: 'Новгородская область'
    }
  ];

  const boats = [
    {
      name: 'Каяк для слалома',
      description: 'Профессиональный каяк для гребного слалома',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/c9f6a7bd-f36a-4477-aa42-f63876726d18.jpg'
    },
    {
      name: 'Каяк для экстрима',
      description: 'Укороченный каяк для трюков и фристайла',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/4a41edbf-95a5-4ae0-a01c-76f047b57e74.jpg'
    },
    {
      name: 'Каноэ K-1',
      description: 'Одноместный каноэ для индивидуальных заездов',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/e64bcefe-3c1b-4241-a1c6-1c50422d2dae.jpg'
    },
    {
      name: 'Каноэ C-2',
      description: 'Двухместный каноэ для командных гонок',
      image: 'https://cdn.poehali.dev/projects/d70e44f8-2f91-4fed-9bef-d225a8b2f111/files/98dcd75a-d307-43b8-b59b-6745a3646303.jpg'
    }
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
                onClick={() => setSelectedSection(selectedSection === section.title ? null : section.title)}
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
                  {selectedSection === section.title && (
                    <div className="mt-6 pt-6 border-t border-primary/20 text-left space-y-4 animate-fade-in">
                      <p className="text-sm font-medium text-foreground">
                        {section.details}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-bold text-primary text-sm">Факты:</h4>
                        <ul className="space-y-2">
                          {section.facts?.map((fact, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Наши лодки
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boats.map((boat, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={boat.image} 
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {boat.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {boat.description}
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
              {Object.keys(schedule).map((day) => {
                const shortName = day === 'Понедельник' ? 'Пн' :
                                  day === 'Вторник' ? 'Вт' :
                                  day === 'Среда' ? 'Ср' :
                                  day === 'Четверг' ? 'Чт' :
                                  day === 'Пятница' ? 'Пт' :
                                  day === 'Суббота' ? 'Сб' :
                                  day === 'Воскресенье' ? 'Вс' : day.slice(0, 2);
                return (
                  <TabsTrigger 
                    key={day} 
                    value={day}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-bold py-3 rounded-xl transition-all"
                  >
                    {shortName}
                  </TabsTrigger>
                );
              })}
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
            {trainingGallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={image} 
                  alt={`Training ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Наша команда
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {teamGallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={image} 
                  alt={`Team ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Наши каналы России
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современные гребные каналы с искусственными порогами — идеальные места для тренировок и соревнований мирового уровня
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {canalGallery.map((canal, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={canal.image} 
                  alt={canal.name || 'Гребной канал'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {canal.name && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <h3 className="text-white font-bold text-xl mb-1">{canal.name}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {canal.location}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Работники канала
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наша команда профессионалов обеспечивает безопасность и качество тренировок
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Icon name="User" size={80} className="text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Директор канала</h3>
                  <p className="text-muted-foreground mb-3">Управление комплексом и организация соревнований</p>
                  <p className="font-medium text-foreground">Игнатьев Михаил Анатольевич</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/89eda7e7-b804-42f0-ae4e-a7fc55841105.png" 
                    alt="Главный инженер"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Главный инженер</h3>
                  <p className="text-muted-foreground mb-3">Обслуживание оборудования и контроль потока воды</p>
                  <p className="font-medium text-foreground">Пономарёв Евгений Константинович</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={80} className="text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Администратор</h3>
                  <p className="text-muted-foreground mb-3">Обеспечение безопасности спортсменов на воде</p>
                  <p className="font-medium text-foreground">Кулешов Вадим Андреевич</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Icon name="HardHat" size={80} className="text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ремонтировщик плоскостных спортивных сооружений</h3>
                  <p className="text-muted-foreground mb-3">Поддержание в рабочем состоянии спортивных площадок и сооружений</p>
                  <p className="font-medium text-foreground">Перепелов Игорь Олегович</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            История строительства канала в Башкирии
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2010 год - Начало проекта</h3>
                  <p className="text-muted-foreground">Принято решение о строительстве первого в Башкортостане гребного канала с искусственными порогами для развития водных видов спорта.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="HardHat" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2022-2024 - Строительство</h3>
                  <p className="text-muted-foreground">Активная фаза строительства с привлечением лучших специалистов в области водных сооружений. Создание системы регулируемого потока.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2024 год - Открытие канала</h3>
                  <p className="text-muted-foreground">Торжественное открытие гребного канала «Аврора». Первые тренировки и соревнования регионального уровня.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Trophy" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2025 год - Развитие</h3>
                  <p className="text-muted-foreground">Проведение всероссийских соревнований, подготовка спортсменов сборной. Канал стал центром развития гребного слалома в Приволжском регионе.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Ruler" className="text-primary" size={32} />
                    <div>
                      <h4 className="font-bold text-xl">250 метров</h4>
                      <p className="text-muted-foreground text-sm">Длина трассы</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Канал соответствует международным стандартам для проведения соревнований по гребному слалому</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Waves" className="text-primary" size={32} />
                    <div>
                      <h4 className="font-bold text-xl">Регулируемый поток</h4>
                      <p className="text-muted-foreground text-sm">Современная система</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Возможность создавать различные уровни сложности для тренировок спортсменов любого уровня</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Users" className="text-primary" size={32} />
                    <div>
                      <h4 className="font-bold text-xl">500+ спортсменов</h4>
                      <p className="text-muted-foreground text-sm">Ежегодно</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Тренируются на базе канала, включая членов сборных команд России</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Президент Федерации гребного слалома России
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
          
          <div className="max-w-4xl mx-auto relative">
            <img 
              src="https://cdn.poehali.dev/files/ac9cdba3-b130-41c0-8303-0eb6cd34f366.png" 
              alt="Президент Федерации гребного слалома России"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-b-3xl">
              <h3 className="text-white font-bold text-3xl mb-2">Сергей Павлович Папуш</h3>
              <p className="text-white/90 text-lg mb-4">Президент Федерации гребного слалома России</p>
              <div className="grid md:grid-cols-2 gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span>Заслуженный тренер России</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Medal" size={20} className="text-primary" />
                  <span>Мастер спорта международного класса</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span>В должности с 2015 года</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Trophy" size={20} className="text-primary" />
                  <span>Чемпион Европы 1998 года</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Количество детей в Гребном Слаломе
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Users" size={40} className="text-white" />
                </div>
                <div className="text-5xl font-black text-primary mb-2">120+</div>
                <p className="text-muted-foreground font-medium">Детей занимаются</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={40} className="text-white" />
                </div>
                <div className="text-5xl font-black text-primary mb-2">8-18</div>
                <p className="text-muted-foreground font-medium">Возраст спортсменов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
                <div className="text-5xl font-black text-primary mb-2">25+</div>
                <p className="text-muted-foreground font-medium">Призёров соревнований</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Icon name="Heart" size={64} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Развитие юных спортсменов</h3>
                  <p className="text-white/90 leading-relaxed">
                    Гребной канал «Аврора» активно развивает детский спорт в Башкортостане. Наши воспитанники регулярно занимают призовые места на региональных и всероссийских соревнованиях. Мы создаём условия для того, чтобы каждый ребёнок мог раскрыть свой потенциал и стать чемпионом.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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