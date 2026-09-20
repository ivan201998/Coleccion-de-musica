export class Cancion {
    private reproduciendo = false;

    constructor(public titulo: string, 
    public duracion: number) {}

    reproducir(): void{
        this.reproduciendo = true;
    }

    estaReproduciendose(): boolean{
        return this.reproduciendo;
    }
}