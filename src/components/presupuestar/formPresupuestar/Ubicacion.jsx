import React from "react";
import { Badge } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Ubicacion = (props) => {
  const ubicacionRef = React.useRef();
  const [ubicacionError, setUbicacionError] = React.useState(false);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    props.handleUbicacion(value);
    props.setCoordenadas(latLng);
  };

  const handleBlur = async (e) => {
    try {
      await geocodeByAddress(e.target.value);

      ubicacionRef.current.classList = "form__input";
      setUbicacionError(false);
      props.setPrice("0"); //sacar
    } catch (e) {
      ubicacionRef.current.classList = "form__input form__input--error";
      setUbicacionError(true);
      props.setPrice(null);
    }
  };

  return (
    <div className="form-group mt-2">
      <p className="form__label">Ubicación (exacta)</p>
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
                onBlur: handleBlur,
                ref: ubicacionRef,
              })}
            />

            <div className="form__autosuggest">
              {suggestions.slice(0, 5).map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#5a98fd" : "#fff",
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #ddd",
                };

                return (
                  <div
                    className="form__autosuggest__inner"
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={index}
                  >
                    <i className="fa-solid fa-location-dot"></i> &nbsp;{" "}
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {ubicacionError && (
        <Badge bg="danger" className="mt-1 mb-0 form__fecha__badge">
          Dirección no valida
        </Badge>
      )}
    </div>
  );
};

export default Ubicacion;
