import { createAction, props } from '@ngrx/store';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

export const unSetItems = createAction('[IngresoEgreso] unset Items');
export const setItems = createAction(
    '[IngresoEgreso] Set Items',
    props<{ items: IngresoEgreso[]}>()
);
