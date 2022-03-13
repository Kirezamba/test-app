import React, { ChangeEvent, FC } from "react";

interface SearchStatusProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchStatus: FC<SearchStatusProps> = React.memo(function SearchStatus({ onSearch }) {
  return (
    <input
      onChange={onSearch}
      className="form-control"
      type="text"
      placeholder="Search for contact name:"
      aria-label="default input example"
      style={{ maxWidth: "400px", marginTop: "5px" }}
    />
  );
});
