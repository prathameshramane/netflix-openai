import React, { useRef, useState } from "react";
import Button from "../../components/Button";
import openai from "../../utils/openai.config";
import { useDispatch } from "react-redux";
import { addGptResults } from "../../store/gptSlice";

const GptSearchBar = () => {
  const searchBox = useRef();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    const query = searchBox.current.value;
    const prompt =
      "Act as a movie recommendation system, and give top 5 movie result for the query '" +
      query +
      "' in comma separated format. An example response is: 3 Idiots, Golmaal, Dhamal, Race, Run";
    fetchOpenAiReponse(prompt);
  };

  const fetchOpenAiReponse = async (prompt) => {
    setIsLoading(true);
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });
    const moviesArray = result.choices[0].message.content
      .split(",")
      .map((movie) => movie.trim());
    dispatch(addGptResults(moviesArray));
    setIsLoading(false);
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
        <Button onClick={handleSearch} disabled={isLoading}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default GptSearchBar;
