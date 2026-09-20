import { describe, it, expect } from 'vitest';
import { Cancion } from '../src/Cancion';


describe("La cancion tiene un titulo y una duracion", ()=>{
    it("guarda el titulo correctamente", ()=>{
        const cancion = new Cancion("avicii", 50);
        expect(cancion.titulo).toBe("avicii");
    })

    it("la duracion de la cacion", ()=>{
        const cancion = new Cancion("avicii", 50);
        expect(cancion.duracion).toBe(50);
    })

    it("antes de reproducirse, no esta sonando", ()=>{
        const cancion = new Cancion("avicii", 50);
        expect(cancion.estaReproduciendose()).toBe(false);
    })

    it("despues de reproducirse, esta sonando", ()=>{
        const cancion = new Cancion("avicii", 50);
        cancion.reproducir();
        expect(cancion.estaReproduciendose()).toBe(true);
    })
})