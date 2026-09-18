'use client';

import {
  ClipboardListIcon,
  InboxIcon,
  MoreHorizontalIcon,
  SearchIcon
} from 'lucide-react';
import * as React from 'react';
import { toast } from 'sonner';

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  EmptyState,
  IconButton,
  Input,
  PasswordInput,
  PhoneInput,
  Progress,
  RadioGroup,
  RadioGroupItem,
  SegmentedControl,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  StatCard,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  Toast,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Typography
} from '@/shared/ui';

const COLOR_GROUPS = [
  {
    title: 'Brand — amber',
    tokens: [
      ['--amber-50', '#FFF9EC'],
      ['--amber-100', '#FEEFD3'],
      ['--amber-200', '#FDDCA2'],
      ['--amber-300', '#FDC966'],
      ['--amber-400', '#FCBB3B'],
      ['--amber-500', '#FBAC14'],
      ['--amber-600', '#E09104'],
      ['--amber-700', '#AE7003'],
      ['--amber-900', '#5C3B02']
    ]
  },
  {
    title: 'Ink',
    tokens: [
      ['--ink-900', '#0A0A0A'],
      ['--ink-800', '#141414'],
      ['--ink-700', '#1F1F1F'],
      ['--ink-600', '#2E2E2E']
    ]
  },
  {
    title: 'Neutrals',
    tokens: [
      ['--white', '#FFFFFF'],
      ['--gray-50', '#F6F6F6'],
      ['--gray-100', '#EFEFEF'],
      ['--gray-200', '#E4E4E4'],
      ['--gray-300', '#D2D2D2'],
      ['--gray-400', '#B5B5B5'],
      ['--gray-500', '#8E8E8E'],
      ['--gray-600', '#6B6B6B'],
      ['--gray-700', '#4F4F4F']
    ]
  },
  {
    title: 'Semantic — red',
    tokens: [
      ['--red-100', '#FDE3E3'],
      ['--red-500', '#F04949'],
      ['--red-600', '#D62F2F'],
      ['--red-700', '#9C1F1F']
    ]
  }
] as const;

const TYPOGRAPHY_VARIANTS = [
  'display1',
  'display2',
  'display3',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'label1',
  'label2',
  'p1',
  'p2',
  'bodySm',
  'caption1',
  'caption2',
  'metric'
] as const;

const BUTTON_VARIANTS = [
  'default',
  'accent',
  'secondary',
  'ghost',
  'danger',
  'link'
] as const;

const ICON_BUTTON_VARIANTS = [
  'ink',
  'light',
  'accent',
  'ghost',
  'outline',
  'danger'
] as const;

const BADGE_TONES = [
  'high',
  'mid',
  'low',
  'done',
  'idle',
  'overdue',
  'ink',
  'accent'
] as const;

const SELECT_OPTIONS = [
  { value: 'draft', label: 'Черновик' },
  { value: 'in-progress', label: 'На исполнении' },
  { value: 'done', label: 'Исполнено' }
] as const;

const SEGMENTED_OPTIONS = [
  { value: 'all', label: 'Все', count: 24 },
  { value: 'open', label: 'На исполнении', count: 8 },
  { value: 'done', label: 'Исполнено', count: 16 }
] as const;

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <Typography variant="h3">{title}</Typography>
      <div className="flex max-w-3xl flex-col gap-6 rounded-2xl border border-dashed border-(--gray-300) bg-(--white) p-6">
        {children}
      </div>
    </section>
  );
}

function VariantRow({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-8">
      <Typography
        variant="caption1"
        className="w-28 shrink-0 text-(--gray-500)"
      >
        {label}
      </Typography>
      {children}
    </div>
  );
}

export default function UiPage() {
  const [segment, setSegment] = React.useState('all');
  const [selectValue, setSelectValue] = React.useState('in-progress');
  const [tagVisible, setTagVisible] = React.useState(true);

  return (
    <div className="flex flex-col gap-12 py-10">
      <div className="flex flex-col gap-2">
        <Typography variant="caption1" className="text-(--gray-500)">
          Design system
        </Typography>
        <Typography variant="display3">Компоненты</Typography>
        <Typography variant="p2" className="text-(--gray-600)">
          Палитра и UI-примитивы New Ailam: Urbanist, янтарь из логотипа.
        </Typography>
      </div>

      <Section title="Colors">
        {COLOR_GROUPS.map(group => (
          <div key={group.title} className="flex flex-col gap-3">
            <Typography variant="h5">{group.title}</Typography>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {group.tokens.map(([name, value]) => (
                <div key={name} className="flex items-center gap-3">
                  <span
                    className="size-10 shrink-0 rounded-lg border border-(--gray-200)"
                    style={{ background: `var(${name})` }}
                  />
                  <div className="min-w-0">
                    <Typography variant="caption2">{name}</Typography>
                    <Typography
                      variant="caption2"
                      className="font-mono text-(--gray-500)"
                    >
                      {value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Typography">
        {TYPOGRAPHY_VARIANTS.map(variant => (
          <VariantRow key={variant} label={variant}>
            <Typography variant={variant}>
              {variant === 'metric'
                ? '1 248'
                : 'Съешь ещё этих мягких французских булок'}
            </Typography>
          </VariantRow>
        ))}
      </Section>

      <Section title="Button">
        {BUTTON_VARIANTS.map(variant => (
          <VariantRow key={variant} label={variant}>
            <div className="flex flex-wrap gap-2">
              <Button variant={variant}>Кнопка</Button>
              <Button variant={variant} disabled>
                Disabled
              </Button>
            </div>
          </VariantRow>
        ))}
        <VariantRow label="sizes">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </VariantRow>
      </Section>

      <Section title="IconButton">
        {ICON_BUTTON_VARIANTS.map(variant => (
          <VariantRow key={variant} label={variant}>
            <IconButton variant={variant} aria-label={`Иконка ${variant}`}>
              <SearchIcon />
            </IconButton>
          </VariantRow>
        ))}
      </Section>

      <Section title="Badge / Tag">
        <div className="flex flex-wrap gap-2">
          {BADGE_TONES.map(tone => (
            <Badge key={tone} variant={tone}>
              {tone}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag>Метаданные</Tag>
          <Tag tone="outline">Обводка</Tag>
          {tagVisible && (
            <Tag onRemove={() => setTagVisible(false)}>С удалением</Tag>
          )}
        </div>
      </Section>

      <Section title="SegmentedControl">
        <SegmentedControl
          options={SEGMENTED_OPTIONS}
          value={segment}
          onValueChange={setSegment}
        />
      </Section>

      <Section title="Inputs">
        <Input label="Текст" placeholder="Введите текст" />
        <Input label="С подсказкой" placeholder="Год" hint="Формат ГГГГ" />
        <Input
          label="С ошибкой"
          placeholder="Введите текст"
          error="Укажите год"
          defaultValue="abc"
        />
        <PasswordInput label="Пароль" placeholder="Введите пароль" />
        <PhoneInput label="Телефон" placeholder="+7 (___) ___-__-__" />
        <Textarea label="Описание" placeholder="Расскажите подробнее" />
        <div className="flex flex-col gap-2">
          <Typography
            variant="caption2"
            className="font-semibold text-(--gray-600)"
          >
            Статус
          </Typography>
          <Select value={selectValue} onValueChange={setSelectValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SELECT_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Section>

      <Section title="Checkbox / Radio / Switch">
        <Checkbox label="Согласен с условиями" defaultChecked />
        <Checkbox label="Акцентный" tone="accent" />
        <RadioGroup defaultValue="delivery">
          <RadioGroupItem value="delivery" label="Доставка" />
          <RadioGroupItem value="pickup" label="Самовывоз" />
        </RadioGroup>
        <Switch label="Уведомления" defaultChecked />
        <Switch label="Акцентный" tone="accent" />
      </Section>

      <Section title="Avatar">
        <div className="flex flex-wrap items-end gap-6">
          <Avatar size="sm">
            <AvatarFallback>АК</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback>МН</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>ОР</AvatarFallback>
          </Avatar>
          <AvatarGroup
            people={[
              { name: 'Анна Ким' },
              { name: 'Марат Нур' },
              { name: 'Олег Раев' },
              { name: 'Сара Бек' },
              { name: 'Иван Петров' }
            ]}
          />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="assignments">
          <TabsList>
            <TabsTrigger value="assignments" count={12}>
              Поручения
            </TabsTrigger>
            <TabsTrigger value="docs" count={4}>
              Документы
            </TabsTrigger>
            <TabsTrigger value="events">Мероприятия</TabsTrigger>
          </TabsList>
          <TabsContent value="assignments">
            <Typography variant="p2">Контент вкладки «Поручения»</Typography>
          </TabsContent>
          <TabsContent value="docs">
            <Typography variant="p2">Контент вкладки «Документы»</Typography>
          </TabsContent>
          <TabsContent value="events">
            <Typography variant="p2">Контент вкладки «Мероприятия»</Typography>
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">МОиН КР</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Свердловский район</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>СШ №12</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Section>

      <Section title="Card / StatCard">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <Badge variant="high">Высокий</Badge>
            <CardAction>
              <IconButton size="sm" variant="ghost" aria-label="Ещё">
                <MoreHorizontalIcon />
              </IconButton>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Typography variant="h3">Отчёт по успеваемости 8 «Б»</Typography>
            <Progress value={64} label="Исполнение" showValue />
          </CardContent>
          <CardFooter>
            <Typography variant="bodySm" className="text-(--gray-600)">
              МОиН КР · до 30 сентября
            </Typography>
          </CardFooter>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard
            icon={<ClipboardListIcon className="size-5" />}
            label="Поручения"
            value="34"
            delta="+4"
            deltaTone="up"
          />
          <StatCard
            icon={<InboxIcon className="size-5" />}
            label="Просрочено"
            value="3"
            delta="-1"
            deltaTone="down"
          />
        </div>
      </Section>

      <Section title="Progress">
        <Progress value={72} label="Охват программы" showValue />
        <Progress value={40} tone="ink" label="Согласование" showValue />
        <Progress value={18} tone="danger" label="Просрочено" showValue />
      </Section>

      <Section title="Dialog / Tooltip">
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Открыть диалог</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Вернуть на доработку</DialogTitle>
                <DialogDescription>
                  Укажите причину возврата. Документ вернётся автору.
                </DialogDescription>
              </DialogHeader>
              <Textarea
                label="Комментарий"
                placeholder="Не заполнено приложение 1"
              />
              <DialogFooter>
                <Button variant="secondary">Отмена</Button>
                <Button>Вернуть</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton aria-label="Открыть поручение">
                <SearchIcon />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent>Открыть поручение</TooltipContent>
          </Tooltip>
        </div>
      </Section>

      <Section title="Toast">
        <div className="flex flex-col gap-3">
          <Toast
            tone="info"
            title="Документ направлен"
            message="Цепочка согласования запущена."
          />
          <Toast
            tone="success"
            title="Исполнено"
            message="Поручение закрыто в срок."
          />
          <Toast
            tone="error"
            title="Просрочено"
            message="Срок истёк 12.05.2026."
          />
          <Button
            variant="secondary"
            onClick={() =>
              toast.success('Документ направлен', {
                description: 'Цепочка согласования запущена.'
              })
            }
          >
            Показать системный тост
          </Button>
        </div>
      </Section>

      <Section title="EmptyState">
        <EmptyState
          icon={<InboxIcon className="size-[26px]" />}
          title="Просроченных поручений нет"
          description="Все задачи выполнены в срок."
          action={<Button variant="secondary">К рабочему столу</Button>}
        />
      </Section>

      <Section title="Separator">
        <VariantRow label="subtle">
          <Separator className="flex-1" />
        </VariantRow>
        <VariantRow label="default">
          <Separator variant="default" className="flex-1" />
        </VariantRow>
        <VariantRow label="strong">
          <Separator variant="strong" className="flex-1" />
        </VariantRow>
      </Section>

      <Section title="Skeleton">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </div>
      </Section>
    </div>
  );
}
