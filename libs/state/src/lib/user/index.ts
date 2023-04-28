import { create } from "zustand";
import { produce } from "immer";
import { StaticImageData } from "next/image";
import userLogo from "@pethub/assets/user-logo.svg";
import petLogo from "@pethub/assets/pet-avatar-logo.png";
import { IVetAppointment, PetAppointmentStatus } from "../vet-appointments";
import { IRecipientInfo, IShoppingCartState } from "../shopping-cart";

export enum PetType {
   Dog = "Dog",
   Cat = "Cat",
   Bird = "Bird",
   Fish = "Fish",
   Rodent = "Rodent",
}

export interface IPet {
   id: string;
   avatar: string | StaticImageData;
   breed: string;
   description: string;
   type: PetType;
   name: string;
   birthDate: Date;
}

export interface IOrder {
   shoppingCart: IShoppingCartState;
   recipientInfo: IRecipientInfo;
   dateTime: Date;
   orderId: string;
}

export interface IUser {
   firstName: string;
   profilePicture: string | StaticImageData;
   lastName: string;
   email: string;
   password: string;
   hasPets: boolean;
   pets: IPet[];
   orders: IOrder[];
   vetAppointments: IVetAppointment[];
}

interface ICurrentUserState {
   user: IUser | null;
}

interface Actions {
   setUser: (user: IUser) => void;
   setPassword: (password: string) => void;
   addPet: (pet: IPet) => void;
   addVetAppointment: (appointment: IVetAppointment) => void;
   removePet: (petIndex: number) => void;
   addOrder: (order: IOrder) => void;
}

export const TEST_USER_EMAIL = "testuser@pethub.com";
export const TEST_USER_PASSWORD = "test123";

export const TEST_PET = {
   name: "Rocky",
   type: PetType.Dog,
   birthDate: new Date(2018, 2, 2),
   breed: "",
   description: "",
   avatar: petLogo,
   id: "dfswf",
};

export const TEST_USER: IUser = {
   email: TEST_USER_EMAIL,
   password: TEST_USER_PASSWORD,
   firstName: "Test",
   lastName: "User",
   orders: [],
   pets: [TEST_PET],
   vetAppointments: [
      {
         pet: TEST_PET,
         appointmentType: "стандартен",
         scheduledDateTime: new Date(2023, 5, 5),
         location: "Варна",
         vetClinic: "Окръжна болница",
         status: PetAppointmentStatus.Due,
      },
   ],
   hasPets: true,
   profilePicture: userLogo,
};

export const useCurrentUser = create<ICurrentUserState & Actions>((set) => ({
   user: { ...TEST_USER },
   setUser: (user: IUser) =>
      set(
         produce((state: ICurrentUserState) => {
            state.user = user;
         })
      ),
   setPassword: (password: string) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= TEST_USER;
            user.password = password;
         })
      ),
   addPet: (pet: IPet) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= TEST_USER;
            user.pets = [...user.pets, pet];
         })
      ),
   addVetAppointment: (appointment: IVetAppointment) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= TEST_USER;
            user.vetAppointments = [...user.vetAppointments, appointment];
         })
      ),
   removePet: (petIndex: number) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= TEST_USER;
            user.pets = user.pets.filter((p, i) => i !== petIndex);
         })
      ),
   addOrder: (order: IOrder) =>
      set(
         produce((state: ICurrentUserState) => {
            state.user?.orders.push(order);
         })
      ),
}));
