import { RolModel } from "./rol.model";

export interface User{
    userId: number;
    name: string;
    fileImage: File;
    image: string;
    lastName: string;
    secondLastName?: string;
    dateOfBirth: Date;
    numberPhone: string;
    document: string;
    email: string;
    documentTypeId: number;
    addressId?: number | null;
    rolId: number;
    edad: number;
    rol?:RolModel | null;
  }
