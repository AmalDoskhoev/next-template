# 🧩 next-template

Модульный шаблон на базе **Next.js** с использованием **Feature-Sliced Design (FSD)**, фокусирующийся на удобстве масштабирования, строгом code style и продуктивной разработке с помощью современного фронтенд-стека.

## Оглавление

0. [Минимальные требования перед запуском проекта](#Минимальные-требования-перед-запуском-проекта)
1. [Используемый стек](#Используемый-стек)
2. [Code style](#Code-style)
3. [Как включить авто форматирование кода в различных IDE](#Как-включить-авто-форматирование-кода-в-различных-ide)
4. [Структура проекта](#Структура-проекта)
5. [Комментирование кода](#Комментирование-кода)
6. [Команды](#Команды)

---

## Минимальные требования перед запуском проекта

1. Ознакомьтесь с [используемым стеком](#Используемый-стек).
2. Установите:

- **Node.js** `v22.14.0 (LTS)`
- **npm** `v10.9.2 (Latest)`

---

## Используемый стек

- **Фреймворк:** [Next.js @15.3.0](https://nextjs.org/docs)
- **Язык:** [TypeScript @^5](https://www.typescriptlang.org/docs/)
- **Архитектура:** [Feature-Sliced Design](https://feature-sliced.github.io/documentation/ru/)
- **Стилизация:** [Tailwind CSS @^4](https://tailwindcss.com/), [SASS @^1.86.3](https://sass-lang.com/)
- **UI компоненты:**
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Lucide React](https://lucide.dev/)
- **Тема приложения:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Анимации:** [tw-animate-css](https://github.com/ElMehdiLebbar/tw-animate-css)
- **Хранилище:** [Zustand @^5](https://zustand-demo.pmnd.rs/)
- **Работа с куками:** [js-cookie](https://github.com/js-cookie/js-cookie)
- **Работа с формами:** [React Hook Form](https://react-hook-form.com/get-started)
- **Валидация:** [Zod @^3](https://zod.dev/)
- **Утилиты:** `clsx`, `class-variance-authority`, `compose-function`
- **Линтинг и автоформатирование:**
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://github.com/okonet/lint-staged)

---

## Code style

В проекте включены строгие правила линтинга и автоформатирования.  
Но есть **правила, которые не покрываются линтерами** — соблюдай их вручную, иначе 👀 прилетит на ревью.

### 📁 Нэйминг

| Сущность           | Формат                | Пример              |
| ------------------ | --------------------- | ------------------- |
| Файлы              | `kebab-case`          | `user-card.tsx`     |
| Переменные/функции | `camelCase`           | `fetchUserData()`   |
| Константы          | `SCREAM_CASE`         | `API_BASE_URL`      |
| Компоненты         | `PascalCase`          | `UserForm.tsx`      |
| Иконки             | `PascalCase` + `Icon` | `ArrowLeftIcon.tsx` |

---

## Как включить авто форматирование кода в различных IDE

### VS Code

1. Установи плагины:

   - ESLint
   - Prettier

2. В `.vscode/settings.json` добавь:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "typescriptreact"]
}
```

---

## Структура проекта

Проект построен по принципам **Feature-Sliced Design (FSD)**:

src/
├── app/ # Next.js app directory
├── shared/ # UI, utils, lib, config, constants
├── entities/ # Сущности бизнес-логики (user, product)
├── features/ # Фичи – поиски, фильтры, лайки
├── widgets/ # Крупные компоненты (карточки, таблицы)
├── pages/ # Маршруты (если не используешь app/)

---

## Комментирование кода

Пиши комментарии в формате:

```javascript
// ❌ Плохо:
const a = b + c;

// ✅ Хорошо:
const priceWithTax = basePrice + tax; // Вычисляем итоговую цену с налогом
```

---

## Команды

Команда | Назначение
npm run dev | Запустить проект в режиме разработки
npm run build | Собрать проект
npm start | Запустить production-сборку
npm run lint | Запустить линтер
npm run prepare | Установить git-хуки через husky
