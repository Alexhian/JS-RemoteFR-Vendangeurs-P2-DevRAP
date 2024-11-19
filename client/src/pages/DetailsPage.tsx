import { useEffect, useState } from "react";
import Search from "../components/Search";
import Loading from "../components/Loading";
import Card from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import CardDev from "../components/CardDev";
import type { Hero } from "../lib/definition";

export default function DetailsPage() {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [input, setInput] = useState("");

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";

  const filteredHeroes = data.filter(
    (hero) =>
      hero.name.toLowerCase().includes(input.toLowerCase()) ||
      hero.biography.publisher?.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${query}`);
        if (!response.ok)
          throw new Error("something went wrong! could not fetch data😖");
        const heroes = await response.json();

        setData(heroes);

        setIsLoading(false);
      } catch (err) {
        console.error((err as Error).message);
        setError((err as Error).message);
      }
    };
    if (input.length < 1) {
      setData([]);
      return;
    }
    fetchData();
    setPage(1);
  }, [input]);

  // let currentData = null;

  const numPage = Math.ceil(data.length / 10);

  const resultsPerPage = 6;
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;
  const currentData = filteredHeroes.slice(start, end);

  function handleNext() {
    if (page < numPage) setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <>
      <header className="header">
        <Search
          filteredHeroes={filteredHeroes}
          setInput={setInput}
          input={input}
        />
      </header>
      <main className="container">
        <div className="leftSection">
          {filteredHeroes.length !== 0 ? (
            <>
              {isLoading && <Loading />}
              {currentData && !error && !isLoading && (
                <Card data={currentData} setSelectedHero={setSelectedHero} />
              )}
              {error && <ErrorMessage message={error} name={""} />}
              {currentData?.length > 5 && (
                <div className="btnLeft">
                  {page > 1 && (
                    <button
                      type="button"
                      className="btnFirst"
                      onClick={handlePrev}
                    >
                      Go to page {page - 1}
                    </button>
                  )}
                  {page < numPage && (
                    <button
                      type="button"
                      className="btnSecond"
                      onClick={handleNext}
                    >
                      Go to page {page + 1}
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="heroSearch">
              search for super hero by using the correct hero name😇
            </p>
          )}
        </div>

        {currentData?.length > 0 ? (
          <div className="rightSection">
            {selectedHero ? (
              <CardDev selectedHero={selectedHero} />
            ) : (
              <p className="NoSuperHero">
                Click on a super hero show button at the left for all details.
                Happy exploring!😇
              </p>
            )}
          </div>
        ) : (
          <p className="NoSuperHero">No supper hero selected</p>
        )}
      </main>
    </>
  );
}
