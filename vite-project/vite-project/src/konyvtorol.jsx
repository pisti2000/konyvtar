import React, { useState } from "react";


function KonyvTorol({ refresh }) {
  const [form, setForm] = useState({
    konyv_id: "",
    szerzo: "",
    cim: "",
    mufaj: ""
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    api.post("/konyv/ins", form)
      .then(() => {
        setForm({ konyv_id: "", szerzo: "", cim: "", mufaj: "" });
        refresh();
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={submit}>
      <h2>Könyv hozzáadása</h2>
      <input name="konyv_id" placeholder="ID" value={form.konyv_id} onChange={change} />
      <br /><br />
      <input name="szerzo" placeholder="Szerző" value={form.szerzo} onChange={change} />
      <br /><br />
      <input name="cim" placeholder="Cím" value={form.cim} onChange={change} />
      <br /><br />
      <input name="mufaj" placeholder="Műfaj" value={form.mufaj} onChange={change} />
      <br /><br />
      <button type="submit">Hozzáadás</button>
    </form>
  );
}

export default KonyvTorol;
