export interface MyReclamo {
  descripcion?: string;
  fecha?:       Fecha;
  estado?:      string;
  categoria?:   string;
  titulo?:      string;
  fotos?:       string[];
  posicion?:    string[];
  uuid?:        string;
  area?:        string;
}

export interface Fecha {
  _seconds?:     number;
  _nanoseconds?: number;
}
