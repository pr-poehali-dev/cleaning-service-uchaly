import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/9491cb1b-ccf6-4957-ae96-8a5b0eaeb13e/files/40c64ccc-df5f-4d2c-809b-86d13d71a1ef.jpg';

const services = [
  {
    icon: 'Home',
    title: 'Уборка квартир',
    desc: 'Поддерживающая и генеральная уборка жилых помещений любой площади.',
    price: 'от 70 ₽/м²',
  },
  {
    icon: 'Sparkles',
    title: 'Генеральная уборка',
    desc: 'Тщательная мойка всех поверхностей, техники, окон и труднодоступных мест.',
    price: 'от 90 ₽/м²',
  },
  {
    icon: 'Building2',
    title: 'Уборка офисов',
    desc: 'Регулярное обслуживание офисов и коммерческих помещений в Учалах.',
    price: 'от 45 ₽/м²',
  },
  {
    icon: 'Construction',
    title: 'После ремонта',
    desc: 'Удаление строительной пыли, следов краски и клея, мойка окон.',
    price: 'от 120 ₽/м²',
  },
  {
    icon: 'Sofa',
    title: 'Химчистка мебели',
    desc: 'Глубокая чистка диванов, кресел, матрасов и ковров на дому.',
    price: 'от 800 ₽',
  },
  {
    icon: 'Square',
    title: 'Мытьё окон',
    desc: 'Кристальная чистота окон, балконов и витрин без разводов.',
    price: 'от 350 ₽/окно',
  },
];

const cleanTypes = [
  { id: 'support', label: 'Поддерживающая', rate: 70, icon: 'Wind' },
  { id: 'general', label: 'Генеральная', rate: 90, icon: 'Sparkles' },
  { id: 'repair', label: 'После ремонта', rate: 120, icon: 'Construction' },
];

const advantages = [
  { icon: 'Clock', title: 'Выезд в день обращения', desc: 'Работаем без выходных' },
  { icon: 'ShieldCheck', title: 'Гарантия качества', desc: 'Переделаем бесплатно' },
  { icon: 'Leaf', title: 'Эко-средства', desc: 'Безопасно для детей и питомцев' },
  { icon: 'Wallet', title: 'Честные цены', desc: 'Без скрытых доплат' },
];

const Index = () => {
  const [area, setArea] = useState(50);
  const [typeId, setTypeId] = useState('support');
  const activeType = cleanTypes.find((t) => t.id === typeId)!;
  const total = area * activeType.rate;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon name="Droplets" size={20} />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">
              Чисто<span className="text-primary">Град</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-primary">Услуги</a>
            <a href="#calc" className="transition-colors hover:text-primary">Калькулятор</a>
            <a href="#contacts" className="transition-colors hover:text-primary">Контакты</a>
          </nav>
          <Button asChild className="rounded-full">
            <a href="tel:+73479100100">
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero-glow">
        <div className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <Icon name="MapPin" size={15} />
              Клининг в городе Учалы
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Идеальная чистота <br />
              <span className="text-gradient">в каждом доме</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Профессиональная уборка квартир, домов и офисов. Современное
              оборудование, эко-средства и команда, которая любит порядок.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-7 text-base">
                <a href="#calc">
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 text-base">
                <a href="#services">Все услуги</a>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <div className="font-display text-3xl font-extrabold text-primary">7 лет</div>
                <div className="text-sm text-muted-foreground">на рынке Учалов</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-primary">2400+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">средняя оценка</div>
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />
            <img
              src={HERO_IMG}
              alt="Чистая светлая комната после уборки"
              className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-y border-border/60 bg-card">
        <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Icon name={a.icon} size={22} />
              </span>
              <div>
                <div className="font-display font-bold">{a.title}</div>
                <div className="text-sm text-muted-foreground">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Наши услуги
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Полный спектр клининга
          </h2>
          <p className="mt-4 text-muted-foreground">
            Прозрачные цены без скрытых доплат. Стоимость фиксируется до начала работ.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} size={26} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-lg font-extrabold text-primary">{s.price}</span>
                <Icon name="ArrowUpRight" size={20} className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="bg-secondary/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Калькулятор
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Узнайте стоимость за 10 секунд
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 md:grid-cols-2 md:p-10">
            <div className="space-y-8">
              <div>
                <label className="font-display font-bold">Тип уборки</label>
                <div className="mt-3 grid gap-3">
                  {cleanTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTypeId(t.id)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                        typeId === t.id
                          ? 'border-primary bg-primary/5 ring-1 ring-primary'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <span className="flex items-center gap-3 font-medium">
                        <Icon name={t.icon} size={20} className="text-primary" />
                        {t.label}
                      </span>
                      <span className="text-sm text-muted-foreground">{t.rate} ₽/м²</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="font-display font-bold">Площадь помещения</label>
                  <span className="font-display text-lg font-extrabold text-primary">{area} м²</span>
                </div>
                <Slider
                  value={[area]}
                  onValueChange={(v) => setArea(v[0])}
                  min={10}
                  max={300}
                  step={5}
                  className="mt-5"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>10 м²</span>
                  <span>300 м²</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary to-[hsl(190_85%_45%)] p-8 text-primary-foreground">
              <div>
                <div className="text-sm font-medium opacity-90">Предварительная стоимость</div>
                <div className="mt-2 font-display text-5xl font-extrabold tracking-tight">
                  {total.toLocaleString('ru-RU')} ₽
                </div>
                <ul className="mt-6 space-y-2 text-sm opacity-90">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} /> {activeType.label} уборка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} /> {area} м² × {activeType.rate} ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} /> Эко-средства включены
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full text-base font-semibold">
                <a href="#contacts">
                  Оставить заявку
                  <Icon name="ArrowRight" size={18} />
                </a>
              </Button>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs text-muted-foreground">
            * Итоговая стоимость уточняется после осмотра. Минимальный заказ — 1500 ₽.
          </p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-20">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Контакты
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 text-muted-foreground">
              Принимаем заявки ежедневно с 8:00 до 21:00. Перезвоним в течение 15 минут.
            </p>
            <div className="mt-8 space-y-5">
              <a href="tel:+73479100100" className="flex items-center gap-4 transition-colors hover:text-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon name="Phone" size={22} />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-display text-lg font-bold">+7 (34791) 00-100</div>
                </div>
              </a>
              <a href="mailto:info@chistograd-uchaly.ru" className="flex items-center gap-4 transition-colors hover:text-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon name="Mail" size={22} />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Почта</div>
                  <div className="font-display text-lg font-bold">info@chistograd-uchaly.ru</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon name="MapPin" size={22} />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Адрес</div>
                  <div className="font-display text-lg font-bold">г. Учалы, ул. Ленина, 21</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-full">
                <a href="#" aria-label="WhatsApp"><Icon name="MessageCircle" size={22} /></a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-full">
                <a href="#" aria-label="Telegram"><Icon name="Send" size={22} /></a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-full">
                <a href="#" aria-label="ВКонтакте"><Icon name="Share2" size={22} /></a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-secondary/50 p-7">
            <h3 className="font-display text-xl font-bold">Оставить заявку</h3>
            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Что нужно убрать?"
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" size="lg" className="w-full rounded-full text-base">
                Отправить заявку
                <Icon name="Send" size={16} />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon name="Droplets" size={15} />
            </span>
            <span className="font-display font-bold text-foreground">ЧистоГрад</span>
            <span>· Учалы</span>
          </div>
          <span>© 2026 ЧистоГрад. Клининг в Учалах.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;