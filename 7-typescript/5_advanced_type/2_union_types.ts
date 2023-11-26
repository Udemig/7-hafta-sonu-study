// Bir değerin tipi için birden fazla
// seçenek bulunuyorsa kullanırız

type Laptop = {
  ram: number;
  cpu: string;
};

type Desktop = {
  desk_ram: number;
  desk_cpu: string;
  desk_gpu: string;
  monitor: string;
};

// iki tipten birini tercih etmek durumundayız
const pc: Laptop | Desktop = {
  desk_ram: 16,
  desk_cpu: 'amd',
  desk_gpu: 'nvidia',
  monitor: 'samsung',
};
