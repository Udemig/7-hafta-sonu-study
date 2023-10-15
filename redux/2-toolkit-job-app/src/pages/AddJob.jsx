import { toast } from 'react-toastify';
import { statusOptions, typeOptions } from './../constants/index';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddJob = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  form sınıfında örnek alma
    const form = new FormData(e.target);
    // formdaki verilerden obje oluşturma
    const newJob = Object.fromEntries(form.entries());

    // select alanlarını kontrol
    if (!newJob.type || !newJob.status) {
      toast.info('Lütfen tip ve durum seçiniz');
      return;
    }
    // işe id ekleme
    newJob.id = v4();
    // tarih ekleme
    newJob.date = new Date();

    // api'ye gönderme
    axios
      .post('http://localhost:4000/jobs', newJob)
      .then(() => {
        navigate('/');
        toast.success('Ekleme işlemi başarılı');
      })
      .catch(() => toast.error('Ekleme işlemi başarısız'));
  };

  return (
    <div className="add-page">
      <section className="add-sec">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pozisyon</label>
            <input type="text" name="position" required />
          </div>
          <div>
            <label>Şirket</label>
            <input type="text" name="company" required />
          </div>
          <div>
            <label>Lokasyon</label>
            <input type="text" name="location" required />
          </div>
          <div>
            <label>Durum</label>
            <select name="status">
              <option selected disabled>
                Seçiniz
              </option>
              {statusOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Tür</label>
            <select name="type">
              <option selected disabled>
                Seçiniz
              </option>
              {typeOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <button className="btn">Ekle</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
