import { create } from "zustand";
import { produce } from "immer";
import { StaticImageData } from "next/image";
import userLogo from "@pethub/assets/user-logo.svg";

export enum PetType {
   Dog = "Dog",
   Cat = "Cat",
   Bird = "Bird",
   Fish = "Fish",
   Rodent = "Rodent",
}

export interface IPet {
   type: PetType;
   name: string;
   birthDate: Date;
}

export interface IUser {
   firstName: string;
   profilePicture: string | StaticImageData;
   lastName: string;
   email: string;
   password: string;
   hasPets: boolean;
   pets: IPet[];
}

const initialState: IUser = {
   firstName: "",
   profilePicture: userLogo,
   lastName: "",
   email: "",
   hasPets: false,
   pets: [],
   password: "",
};

interface ICurrentUserState {
   user: IUser | null;
}

interface Actions {
   setUser: (user: IUser) => void;
   // setFirstName: (firstName: string) => void;
   // setLastName: (lastName: string) => void;
   // setPassword: (password: string) => void;
   // setEmail: (email: string) => void;
   addPet: (pet: IPet) => void;
   removePet: (petIndex: number) => void;
}

export const TEST_USER_EMAIL = "testuser@pethub.com";
export const TEST_USER_PASSWORD = "test123";

export const useCurrentUser = create<ICurrentUserState & Actions>((set) => ({
   user: null,
   setUser: (user: IUser) =>
      set(
         produce((state: ICurrentUserState) => {
            state.user = user;
         })
      ),
   // setFirstName: (firstName: string) =>
   //    set(
   //       produce((state: ICurrentUserState) => {
   //          state.user ??= initialState;
   //          state.user.firstName = firstName;
   //       })
   //    ),
   // setLastName: (lastName: string) =>
   //    set(
   //       produce((state: ICurrentUserState) => {
   //          state.user ??= initialState;
   //          state.user.lastName = lastName;
   //       })
   //    ),
   // setEmail: (email: string) =>
   //    set(
   //       produce(({ user }: ICurrentUserState) => {
   //          user ??= initialState;
   //          user.email = email;
   //       })
   //    ),
   // setPassword: (password: string) =>
   //    set(
   //       produce(({ user }: ICurrentUserState) => {
   //          user ??= initialState;
   //          user.password = password;
   //       })
   //    ),
   addPet: (pet: IPet) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= initialState;
            user.pets = [...user.pets, pet];
         })
      ),
   removePet: (petIndex: number) =>
      set(
         produce(({ user }: ICurrentUserState) => {
            user ??= initialState;
            user.pets = user.pets.filter((p, i) => i !== petIndex);
         })
      ),
}));
