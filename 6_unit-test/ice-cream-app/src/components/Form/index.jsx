import React, { useState } from "react";

const Form = () => {
  /**Eğer checkbox tickli değilse disabled özellği true olacak
   * eğer checbox tickli ise disabled özellği false
   * Buton hover olmuşsa koşulları koudum nladın üstüne p etiketini göster
   *
   *
   */

  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="d-flex justify-content-center gap-3 align-items-center my-4">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        type="checkbox"
      />

      <div className="terms">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className=" bg-light text-black p-2 rounded"
        >
          Size gerçekten birşey teslim etmeyeceğiz
        </p>
        <label htmlFor="" className="lead">
          Koşulları Okudum ve kabul ediyorum
        </label>
      </div>
      <button
       onMouseEnter={()=>setIsHover(true)}
       onMouseLeave={()=>setIsHover(false)}
       disabled={!isChecked} className="btn btn-warning">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
