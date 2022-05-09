import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Ubicacion = (props) => {
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    props.handleUbicacion(value);
    props.setCoordenadas(latLng);
  };

  return (
    <PlacesAutocomplete
      value={props.ubicacion}
      onChange={props.handleUbicacion}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div className="position-relative">
          <input
            type="text"
            {...getInputProps({
              placeholder: "Av. Aconquija 100, Yerba Buena",
              className: "form__input",
            })}
          />

          <div className="form__autosuggest">
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #ddd",
              };

              return (
                <div
                  className="form__autosuggest__inner"
                  {...getSuggestionItemProps(suggestion, { style })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Ubicacion;
