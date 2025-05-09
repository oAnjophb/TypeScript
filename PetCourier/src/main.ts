import { Bird } from "./Animal/bird";
import { Cat } from "./Animal/cat";
import { Dog } from "./Animal/dog";
import { Courier } from "./Courier/courier";
import { Motocycle } from "./Vehicle/motocycle";
import { Scooter } from "./Vehicle/scooter";
import { Van } from "./Vehicle/van";

const Otto = new Dog('Otto', 30, 'Psicopata')
const Nico = new Cat('Nico', 7, 'Dócil')
const Papo = new Bird('Papo', 1, 'Dócil')

const moto = new Motocycle('Motocicleta', 3)
const scooter = new Scooter('Scooter', 2)
const van = new Van('Van', 20)


const corrier = new Courier([Otto, Nico, Papo], [moto, scooter, van])
corrier.startCourier()