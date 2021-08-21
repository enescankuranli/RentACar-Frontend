import { Colour } from "./colour";
import { ResponseModel } from "./ResponseModel";

export interface ColourResponseModel extends ResponseModel{
    data:Colour[]
}