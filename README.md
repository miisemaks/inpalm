# InPalm

## Описание проекта

Этот проект представляет собой мобильное приложение, разработанное с использованием React Native.

## Содержание

- [Описание проекта](#описание-проекта)
- [Установка](#установка)
- [Запуск приложения](#запуск-приложения)
- [Функциональность](#функциональность)
- [Структура проекта](#структура проекта)
- [Технологии](#технологии)

## Установка

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/miisemaks/inpalm.git
   ```

2. Перейдите в директорию проекта:

   ```sh
   cd inpalm
   ```

3. Установите зависимости:

   ```sh
   npm install
   ```

4. Установка на iOS
   ```
   cd ios && pod install
   ```

## Запуск приложения

1. Запустите Metro bundler:

   ```sh
   npx react-native start
   ```

2. Для запуска приложения на Android:

   ```sh
   npx react-native run-android
   ```

3. Для запуска приложения на iOS:
   ```sh
   npx react-native run-ios
   ```

## Структура проекта

Структура проекта построена по Feature Sliced Design

```
inpalm/
├── android/
├── ios/
├── src/
|   ├── app/
|   |   ├── Navigation.tsx
|   |   ├── SearchTab.tsx
|   |   ├── Tab.tsx
|   ├── features/
|   |   ├── advertisements/
|   |   |   ├── ui/
|   |   |   |   ├── card.tsx
|   |   |   ├── index.tsx
|   |   ├── history/
|   |   |   ├── ui/
|   |   |   |   ├── HistoryButton.tsx
|   |   |   ├── index.tsx
|   ├── screens/
|   |   ├── chats/
|   |   ├── confirmCode/
|   |   ├── login/
|   |   ├── main/
|   |   ├── profile/
|   |   ├── register/
|   |   ├── restore/
|   |   ├── search/
|   |   |   ├── advertisements/
|   |   |   ├── groups/
|   |   |   ├── peoples/
|   |   |   ├── products/
|   ├── shared/
|   |   ├── api/
|   |   ├── icons/
|   |   ├── lib/
|   |   ├── store/
|   |   ├── styles/
|   |   ├── types/
|   |   ├── ui/
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Технологии

- **React Native**: Фреймворк для создания кросс-платформенных мобильных приложений. [Документация](https://reactnative.dev/)
- **Zustand**: Библиотека для управления состоянием приложения. [Документация](https://zustand-demo.pmnd.rs/)
- **React Navigation**: Библиотека для навигации между экранами. [Документация](https://reactnavigation.org/)
- **Async storage**: Библиотека для локального хранения данных. [Документация](https://github.com/react-native-async-storage/async-storage#readme)
- **TypeScript**: Статически типизированный язык программирования, обеспечивающий более надежный и поддерживаемый код. [Документация](https://www.typescriptlang.org/)
- **Feature-Sliced-Design**: Архитектурный подход, который позволяет структурировать код по функциональным срезам, улучшая читаемость и поддерживаемость. [Документация](https://feature-sliced.github.io/documentation/)
- **Tanstack/react-query**: Библиотека для управления состоянием и кеширования данных, упрощающая работу с API и асинхронными запросами. [Документация](https://tanstack.com/query/latest/docs/react/overview)
