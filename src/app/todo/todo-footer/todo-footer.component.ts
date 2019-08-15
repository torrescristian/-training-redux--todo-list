import { Component, OnInit } from '@angular/core';
import * as fromFiltros from '../../filter/filter.actions';
import * as fromTodos from '../../todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltros.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltros.filtrosValidos) {
    const accion = new fromFiltros.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarAll() {
    const accion = new fromTodos.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }
}
