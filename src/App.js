import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/CityInInput/Input";
import MessageHistory from "./components/Chat/MessageHistory";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import portfolioArr from "./utils/PortfolioArr";

function App() {
  const portfolio = portfolioArr;

  const [items, setItems] = useState([]);

  async function getArr() {
    try {
      const res = await fetch("https://spirital.clubty.ru/cities");
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getArr()
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  const props = [
    {
      id: "chat-5-1090",
      from: { name: "Ольга" },
      type: "response",
      time: "10:10",
      text: "Привет, Виктор. Как дела? Как идет работа над проектом?",
    },
    {
      id: "chat-5-1091",
      from: { name: "Виктор" },
      type: "message",
      time: "10:12",
      text: "Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.",
    },
    {
      id: "chat-5-1092",
      from: { name: "Ольга" },
      type: "response",
      time: "10:14",
      text: "Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?",
    },
    {
      id: "chat-5-1093",
      from: { name: "Виктор" },
      type: "message",
      time: "10:20",
      text: "Нет, все прошло гладко. Очень хочу показать всё команде.",
    },
    {
      id: "chat-5-1094",
      from: { name: "Виктор" },
      type: "typing",
      time: "10:31",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route
          path="/portfolio"
          element={<Portfolio portfolio={portfolio} />}
        />
        <Route
          path="/messageHistory"
          element={<MessageHistory props={props} />}
        />
        <Route path="/input" element={<Input items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
