import { Property } from "./property";

export interface Repair {

  id: number,
  scheduledRepairDate: Date,
  repairStatus: string,
  repairType: string,
  repairCost: number,
  repairAddress: string,
  workToBeDone: string,
  property: Property
}
 