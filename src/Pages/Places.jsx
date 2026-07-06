import { useMemo, useState } from 'react';
import Header from '../Components/Header.jsx';
import SearchBar from '../Components/SearchBar.jsx';
import CategoryFilter from '../Components/CategoryFilter.jsx';
import PlaceCard from '../Components/PlaceCard.jsx';
import { places, categories } from '../Data/places.js';

export default function Places() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return places.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <Header
        eyebrow="The full map"
        title="Every place we've scouted"
        description="Filter by terrain, or search for a name or region you already have in mind."
      />

      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
            <SearchBar value={query} onChange={setQuery} />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-bark">Nothing matches that search.</p>
              <p className="mt-2 text-sm text-bark-light">
                Try a different name, region, or clear the terrain filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}