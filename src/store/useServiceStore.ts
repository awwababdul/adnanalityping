
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Service, SubService } from "@/types/services";

export type UserNeedsProfile = {
  userType: string | null; // business-owner, family-sponsor, job-seeker
  urgency: string | null; // urgent, standard, flexible
  status: string | null; // uae, gcc, expatriate
  interests: string[];
  lastUpdated: Date;
}

interface ServiceState {
  recommendedServices: (SubService & { categoryId: string })[];
  userProfile: UserNeedsProfile;
  setRecommendedServices: (services: (SubService & { categoryId: string })[]) => void;
  updateUserProfile: (profile: Partial<UserNeedsProfile>) => void;
  resetUserProfile: () => void;
}

const defaultUserProfile: UserNeedsProfile = {
  userType: null,
  urgency: null,
  status: null,
  interests: [],
  lastUpdated: new Date()
};

export const useServiceStore = create<ServiceState>()(
  persist(
    (set) => ({
      recommendedServices: [],
      userProfile: defaultUserProfile,
      
      setRecommendedServices: (services) => set({ recommendedServices: services }),
      
      updateUserProfile: (profile) => set((state) => ({
        userProfile: {
          ...state.userProfile,
          ...profile,
          lastUpdated: new Date()
        }
      })),
      
      resetUserProfile: () => set({ userProfile: defaultUserProfile }),
    }),
    {
      name: "service-recommendations",
    }
  )
);

export default useServiceStore;
