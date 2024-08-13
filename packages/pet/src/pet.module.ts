import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Pet, PetSchema } from "./pet.schema"
import { PetService } from "./pet.service"

@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  providers: [PetService],
  exports: [PetService],
})
export class PetModule {}
