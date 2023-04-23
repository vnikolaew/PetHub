import { IPet } from "@pethub/state";
import { create } from "zustand";
import { produce } from "immer";

export enum PetAppointmentStatus {
   Completed = 0,
   Due = 1,
}

export interface IVetAppointment {
   pet?: IPet | null;
   location: string;
   vetClinic: string;
   appointmentType: string;
   scheduledDateTime: Date;
   status: PetAppointmentStatus;
}

export interface Actions {
   setDateTime: (dateTime: Date) => void;
   setAppointmentType: (type: string) => void;
   setLocation: (location: string) => void;
   setPet: (pet: IPet) => void;
   setVetClinic: (clinic: string) => void;
   setCurrentStep: (step: number) => void;
   setStatus: (status: PetAppointmentStatus) => void;
}

export interface IVetAppointmentState {
   vetAppointment: IVetAppointment;
   currentStepInForm: number;
}

const initialState: IVetAppointmentState = {
   vetAppointment: {
      pet: null,
      location: "",
      appointmentType: "",
      scheduledDateTime: new Date(),
      vetClinic: "",
      status: PetAppointmentStatus.Due,
   },
   currentStepInForm: 1,
};

export const useVetAppointment = create<IVetAppointmentState & Actions>(
   (set) => ({
      ...initialState,
      setPet: (pet: IPet) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.pet = pet;
            })
         ),
      setStatus: (status: PetAppointmentStatus) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.status = status;
            })
         ),
      setCurrentStep: (step: number) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.currentStepInForm = step;
            })
         ),
      setDateTime: (dateTime: Date) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.scheduledDateTime = dateTime;
            })
         ),
      setLocation: (location: string) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.location = location;
            })
         ),
      setVetClinic: (vetClinic: string) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.vetClinic = vetClinic;
            })
         ),
      setAppointmentType: (type: string) =>
         set(
            produce((state: IVetAppointmentState) => {
               state.vetAppointment.appointmentType = type;
            })
         ),
   })
);
