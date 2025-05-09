
import { Dog } from "./animals/dog";
import { PetShop } from "./petshop/petshop";
import { Cat } from "./animals/cat";
import { Wolf } from "./animals/wolf";
import { Veterinarian } from "./petshop/Employees/veterinarian";


const petMania = new PetShop('PET CENTER')
const rafael = new Veterinarian('Dr. Rafael Andrade', 101)

petMania.showInfo()

const lino = new Dog('Lino', 2)
const nico = new Cat('Nico', 1)

const linoAccount = petMania.createPetAccount('Amendoim', lino)
const nicoAccount  = petMania.createPetAccount('Ruan', nico)

linoAccount.realizeService(0, '17/10/2024')
nicoAccount.realizeService(2, '14/08/2024')
nicoAccount.realizeService(3, '21/04/2025')
linoAccount.realizeService(1, '15/06/2025')


linoAccount.showHistory()
nicoAccount.showHistory()

rafael.realizeCare(lino, '09:30', 0)
rafael.realizeCare(nico, '10:00', 3)


rafael.showReport()

