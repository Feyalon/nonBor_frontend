import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Masalan: samarqand non"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/f070/e520/26e91c3156ef6d1240f3961be8d940f0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SC~QE8oO3aghiuzwq~3GzAI6LH-DLAbrdOudn4o-FLjHiibtfJ39TZIbd1P-omEy~0GEq4IcGzRwDsPFU5TaxdtyfVtcPXdxLtURlVyt4ZElLIv6Ta-Oqc--gW6fbZ~dCu09V~zvvIYHLyG6hCov8RQUmjI8uRR8J1y8alVDxRwi-AWUKARgOZhGpVYnDAsDZWbkOhXGsNWZKeK64pq7qr~6Ok6qJx2XkSRMgp79Ir5uUnoM28FsVUjhToBIFpqOqiwMakSBhAF5O1uUCKhJ0wAkgFOTz4YjZGRDChhwQMq8v7tCwiV7TAuQYBYzw9tWfW3cJpStsPeLT7VTexD2sw__"
          alt="Search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
