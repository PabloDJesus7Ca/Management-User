import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PersonasService } from '../../services/persona.service';
import { Persona, PersonaForms } from '../../models/persona.model';

@Component({
  selector: 'app-persona-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.css',
})
export class PersonaForm implements OnInit {
  private service = inject(PersonasService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  // ── Todo el estado en signals ──────────────────────────────────
  form = signal<PersonaForms>({ nombre: '', apellido: '', email: '', edad: undefined });
  cargando = signal<boolean>(false);
  error = signal<string>('');
  modoEditar = signal<boolean>(false);
  personaId = signal<number | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.modoEditar.set(true);
      this.personaId.set(+id);

      this.service.obtenerPorId(+id).subscribe({
        next: (persona: Persona) => {
          this.form.set({
            nombre: persona.nombre,
            apellido: persona.apellido,
            email: persona.email ?? '',
            edad: persona.edad ?? undefined,
          });
        },
        error: () => this.error.set('No se pudo cargar la persona'),
      });
    }
  }
  guardar(): void {
    this.cargando.set(true);
    this.error.set('');

    const PersonaForm = this.form();

    const operacion = this.modoEditar()
      ? this.service.actualizar(this.personaId()!, PersonaForm)
      : this.service.crear(PersonaForm);

    operacion.subscribe({
      next: () => {
        this.form.set({ nombre: '', apellido: '', email: '', edad: undefined });
        this.router.navigate(['/personas']);
      },
      error: (e) => {
        this.error.set(e.error?.error || 'Error desconocido');
        this.cargando.set(false);
      },
      complete: () => this.cargando.set(false),
    });
  }
}
