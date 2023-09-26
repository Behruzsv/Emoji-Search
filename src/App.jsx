import { useState } from "react";
import './App.css'
import Search from './components/search';
import List from "./components/List";

export default function App() {
  const emojis = [
    {
      emoji:  "💯",
      title: "100",
    },
    {
      emoji:  "🔢",
      title: "1234",
    },
    {
      emoji:  "😃",
      title: "Sırıtma",
    },
    {
      emoji:  "😬",
      title: "Ekşitme",
    },
    {
      emoji:  "😁",
      title: "Sırıtış",
    },
    {
      emoji:  "😂",
      title: "Neşeli",
    },
    {
      emoji:  "😀",
      title: "Gülen Yüz",
    },
    {
      emoji:  "😄",
      title: "Gülümsemek",
    },
    {
      emoji:  "😅",
      title: "Tatlı Gülüş",
    },
    {
      emoji:  "😆",
      title: "Kahkaha Atma",
    },
    {
      emoji:  "😇",
      title: "Sevimli Melek",
    },
    {
      emoji:  "😉",
      title: "Göz Kırpma",
    },
    {
      emoji:  "😊",
      title: "Utanma",
    },
    {
      emoji:  "🙂",
      title: "Hafif Gülümseme",
    },
    {
      emoji:  "🙃",
      title: "Baş Aşağı Gülümseme",
    },
    {
      emoji:  "🙂",
      title: "Relax Gülümseme",
    },
    {
      emoji:  "😋",
      title: "Yum Yum Gülümseme",
    },
    {
      emoji:  "😌",
      title: "Huzurlu Gülümseme",
    },
    {
      emoji:  "😍",
      title: "Sevgi Dolu Gülümseme",
    },
    {
      emoji:  "😘",
      title: "Öpücük",
    },
  ];


  const [searchedList, setSearchedList] = useState(emojis);

  const handleChange = (e) => {
    const text = e.target.value;
    const filteredList = emojis.filter((emoji) => {
      return emoji.title.toLowerCase().includes(text.toLowerCase());
    });
    setSearchedList(filteredList);
  };

  return (
    <>
      <h1 className="text-3xl text-center m-4">😹Emoji Arama Motoru😺</h1>
      <div className="mb-4">
        <Search onChange={handleChange} />
        <div>
          <List emojis={searchedList} />
        </div>
      </div>
    </>
  );
}