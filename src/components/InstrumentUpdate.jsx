import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function InstrumentUpdate() {
  const navigate = useNavigate();

  const param = useParams();

  const id = param.hangszerId;

  const [instrument, setInstrument] = useState({});

  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    fetch(`https://kodbazis.hu/api/instruments/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())

      .then(setInstrument)

      .catch(console.log)

      .finally(() => {
        setPending(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://kodbazis.hu/api/instruments/${id}`, {
      method: "PUT",

      credentials: "include",

      body: JSON.stringify({
        name: e.target.elements.name.value,

        price: e.target.elements.price.value,

        quantity: e.target.elements.quantity.value,

        imageURL: e.target.elements.imageURL.value,
      }),
    })
      .then(() => {
        navigate("/");
      })

      .catch(console.log);
  };

  return (
    <div className="p-5 content bg-whitesmoke text-center">
      <h2>Módosítás</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>

          <div className="col-sm-9">
            <input
              defaultValue={instrument.name}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>

          <div className="col-sm-9">
            <input
              defaultValue={instrument.price}
              type="number"
              name="price"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Darabszám:</label>

          <div className="col-sm-9">
            <input
              defaultValue={instrument.quantity}
              type="number"
              name="quantity"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>

          <div className="col-sm-9">
            <input
              defaultValue={instrument.imageURL}
              type="text"
              name="imageURL"
              className="form-control"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
    </div>
  );
}

