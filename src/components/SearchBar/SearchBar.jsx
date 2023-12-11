import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchBarStyle,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onsubmitSearchBar }) => (
  <SearchBarStyle>
    <SearchForm onSubmit={onsubmitSearchBar}>
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchBarStyle>
);

SearchBar.propTypes = {
  onsubmitSearchBar: PropTypes.func.isRequired,
};
