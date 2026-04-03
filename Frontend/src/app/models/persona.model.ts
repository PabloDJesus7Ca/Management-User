export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  email: string | null;
  edad: number | null;
  creado_en: string;
}

export interface PersonaForms {
  nombre: string;
  apellido: string;
  email: string;
  edad: number | undefined;
}
