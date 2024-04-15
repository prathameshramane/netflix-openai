import React, { useRef } from "react";
import Button from "../../components/Button";
import openai from "../../utils/openai.config";

const GptSearchBar = () => {
  const searchBox = useRef();
  const handleSearch = () => {
    const query = searchBox.current.value;
    const prompt =
      "Act as a movie recommendation system, and give top 5 movie result for the query '" +
      query +
      "' in comma separated format. An example response is: 3 Idiots, Golmaal, Dhamal, Race, Run";
    fetchOpenAiReponse(prompt);
  };

  const fetchOpenAiReponse = async (prompt) => {
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });
    const moviesArray = result.choices[0].message.content
      .split(",")
      .map((movie) => movie.trim());
    console.log("OPENAI: ", moviesArray);
    
    // TODO: Store in Redux and Fetch movies using TMDB
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center w-full"
      >
        <input
          ref={searchBox}
          className="w-1/2 px-6 mx-4 my-2 text-lg rounded"
          placeholder="What do you wish to watch today?"
          type="text"
        />
        <Button onClick={handleSearch}>Search</Button>
      </form>
    </div>
  );
};

export default GptSearchBar;
