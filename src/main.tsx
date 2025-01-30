import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Обязательно импортируем QueryClient
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Если хотите использовать devtools
import App from "./App";
import './index.css';

// Создаем экземпляр QueryClient
const queryClient = new QueryClient();

// Найдем элемент с id root в HTML
const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Оборачиваем всё приложение */}
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> {/* (опционально) для devtools */}
    </QueryClientProvider>
  </React.StrictMode>
);
