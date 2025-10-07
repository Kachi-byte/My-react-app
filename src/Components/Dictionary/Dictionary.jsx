import React, { useEffect, useState } from "react";

const Dictionary = () => {
  const [meaning, getMeaning] = useState([]);
  const [language, enterLanguage] = useState("en");
  const [word, searchWord] = useState("");
  const [load, userLoading] = useState(false);
  const GetDictionaryMeaning = async () => {
    if (!language || !word) {
      userLoading(false);
      return;
    }
    try {
      userLoading(true);
      const GetDicMeaning = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      if (!GetDicMeaning.ok) {
        throw new Error("Cannot fetch data");
      }
      const convertToJson = await GetDicMeaning.json();
      getMeaning(convertToJson);
    } catch (error) {
      console.error("Data not found", error);
    } finally {
      userLoading(false);
    }
  };
  return (
    <div>
      <h1>Dictionary</h1>
      <label>Enter Language: </label>
      <input
        type="text"
        value={language}
        onChange={(e) => enterLanguage(e.target.value)}
      /> <br /> <br />
      <label>Enter word:</label>
      <input
        type="text"
        value={word}
        onChange={(f) => searchWord(f.target.value)}
      />
      {load && <p>Loading...</p>}
      {meaning &&
        meaning.map((detail) => (
          <div key={detail.word}>
            <h2>{detail.word}</h2>
            {detail.meanings.map((mean,i) => (
              <div key={i}>
                <h2>{mean.partOfSpeech}</h2>
                {mean.definitions.map((definite, j) => (
                  <div key={j}>{definite.definition}</div>
                ))}
                
              </div>
            
            ))}
          </div>
        ))} <br />

        <button onClick={GetDictionaryMeaning}>Search</button>
    </div>
  );
};

export default Dictionary;
